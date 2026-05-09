import { useRef, useState } from 'react';
import { useAdmin } from './AdminContext.jsx';
import { adminApi } from './adminApi.js';
import './EditableImage.css';

/**
 * EditableImage — renders a normal <img> in visitor mode.
 * In admin mode: hover shows a camera button + zoom slider.
 *
 * Props:
 *   src        – image URL
 *   alt        – alt text
 *   zoom       – current zoom factor (0.5 – 2.0, default 1)
 *   onSrcChange  – (newSrc: string) => void
 *   onZoomChange – (newZoom: number) => void
 *   className  – forwarded to the wrapper
 *   imgClassName – forwarded to the <img>
 */
export function EditableImage({
  src,
  alt = '',
  zoom = 1,
  onSrcChange,
  onZoomChange,
  className = '',
  imgClassName = '',
  style,
  ...rest
}) {
  const { isAdmin } = useAdmin();
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  async function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    try {
      const { url } = await adminApi.uploadImage(file);
      onSrcChange?.(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      // Reset input so same file can be re-selected
      e.target.value = '';
    }
  }

  const imgStyle = {
    transform: zoom !== 1 ? `scale(${zoom})` : undefined,
    transformOrigin: 'center center',
    ...style,
  };

  if (!isAdmin) {
    return (
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        style={imgStyle}
        loading="lazy"
        {...rest}
      />
    );
  }

  return (
    <span className={`editable-image ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`editable-image__img ${imgClassName}`}
        style={imgStyle}
        loading="lazy"
        {...rest}
      />

      {/* Admin overlay controls */}
      <span className="editable-image__controls">
        {/* Camera / replace button */}
        <button
          type="button"
          className="editable-image__camera"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          aria-label={uploading ? 'Uploading…' : 'Replace image'}
          title="Replace image"
        >
          {uploading ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="editable-image__spinner">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="20" strokeDashoffset="10"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 5.5A1.5 1.5 0 013.5 4h.42L5 2h6l1.08 2h.42A1.5 1.5 0 0114 5.5v7A1.5 1.5 0 0112.5 14h-9A1.5 1.5 0 012 12.5v-7z" stroke="currentColor" strokeWidth="1.3"/>
              <circle cx="8" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.3"/>
            </svg>
          )}
        </button>

        {/* Zoom slider */}
        {onZoomChange && (
          <label className="editable-image__zoom-label" title={`Zoom: ${zoom.toFixed(2)}×`}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M8 8l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M3.5 5h3M5 3.5v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.05"
              value={zoom}
              onChange={(e) => onZoomChange?.(parseFloat(e.target.value))}
              className="editable-image__zoom-slider"
            />
            <span className="editable-image__zoom-value">{zoom.toFixed(2)}×</span>
          </label>
        )}

        {error && <span className="editable-image__error">{error}</span>}
      </span>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        tabIndex={-1}
      />
    </span>
  );
}
