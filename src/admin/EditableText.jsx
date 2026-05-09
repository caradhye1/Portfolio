import { useState, useRef, useEffect } from 'react';
import { useAdmin } from './AdminContext.jsx';
import './EditableText.css';

/**
 * EditableText — renders as normal text in visitor mode.
 * In admin mode: shows a pencil icon on hover, clicks into an inline textarea.
 *
 * Props:
 *   as        – element to render when not editing (default: 'span')
 *   className – forwarded to the wrapper element
 *   value     – current string value
 *   onSave    – (newValue: string) => void  — called when edit is committed
 *   multiline – if true, uses <textarea>; otherwise <input type="text">
 */
export function EditableText({ as: Tag = 'span', className = '', value, onSave, multiline = true, children }) {
  const { isAdmin } = useAdmin();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState('');
  const inputRef = useRef(null);

  const displayValue = value ?? (typeof children === 'string' ? children : '');

  function startEdit(e) {
    e.stopPropagation();
    setDraft(displayValue);
    setEditing(true);
  }

  function commit() {
    setEditing(false);
    if (draft !== displayValue && onSave) {
      onSave(draft);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      setEditing(false);
      return;
    }
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      commit();
    }
  }

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      // Move cursor to end
      const len = inputRef.current.value.length;
      inputRef.current.setSelectionRange(len, len);
    }
  }, [editing]);

  if (!isAdmin) {
    return <Tag className={className}>{displayValue || children}</Tag>;
  }

  if (editing) {
    const sharedProps = {
      ref: inputRef,
      className: 'editable-text__input',
      value: draft,
      onChange: (e) => setDraft(e.target.value),
      onBlur: commit,
      onKeyDown: handleKeyDown,
    };

    return (
      <span className="editable-text editable-text--editing">
        {multiline
          ? <textarea {...sharedProps} rows={Math.max(3, draft.split('\n').length)} />
          : <input type="text" {...sharedProps} />
        }
        <span className="editable-text__hint">⌘↵ to save · Esc to cancel</span>
      </span>
    );
  }

  return (
    <span className={`editable-text editable-text--idle ${className}`}>
      <Tag className="editable-text__content">{displayValue || children}</Tag>
      <button
        type="button"
        className="editable-text__pencil"
        onClick={startEdit}
        aria-label="Edit text"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M9.5 2L12 4.5L5 11.5H2.5V9L9.5 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        </svg>
      </button>
    </span>
  );
}
