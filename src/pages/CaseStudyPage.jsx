import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../components/CaseStudy.css';
import { useAdminContent } from '../admin/useAdminContent.js';
import { EditableText } from '../admin/EditableText.jsx';
import { EditableImage } from '../admin/EditableImage.jsx';
import { useAdmin } from '../admin/AdminContext.jsx';

// Render one paragraph or an array of paragraphs. Accepts string | string[].
function renderParagraphs(text, className = 'cs-row-body') {
  if (text == null) return null;
  const arr = Array.isArray(text) ? text : [text];
  return arr.map((t, i) => (
    <p key={i} className={className}>{t}</p>
  ));
}

function FigmaEmbed({ section }) {
  const [active, setActive] = useState(false);
  return (
    <div className="cs-section">
      <div
        className="cs-figma-embed"
        style={active ? { height: section.height ?? 720 } : undefined}
        onClick={!active ? () => setActive(true) : undefined}
        role={!active ? 'button' : undefined}
        tabIndex={!active ? 0 : undefined}
        onKeyDown={!active ? (e) => e.key === 'Enter' && setActive(true) : undefined}
        aria-label={!active ? 'Launch interactive prototype' : undefined}
      >
        {!active ? (
          <div className="cs-figma-preview">
            <img src={section.previewImage} alt="Prototype preview" />
            <div className="cs-figma-play-btn" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        ) : (
          <iframe
            src={section.embedUrl}
            height={section.height ?? 720}
            allowFullScreen
            title="Interactive prototype"
          />
        )}
      </div>
      {section.caption && <p className="cs-caption cs-figma-caption">{section.caption}</p>}
    </div>
  );
}

function renderSection(section, i) {
  switch (section.type) {
    case 'heading-hero':
      return (
        <div key={i} className="cs-section">
          <h2 className="cs-heading-hero">{section.heading}</h2>
        </div>
      );
    case 'text':
      return (
        <div key={i} className="cs-section cs-section--text">
          {section.heading && <h3 className="cs-heading">{section.heading}</h3>}
          {section.text && <p className="cs-text">{section.text}</p>}
        </div>
      );
    case 'image':
      return (
        <div key={i} className="cs-section">
          <div className="cs-image">
            <img src={section.src} alt={section.alt} loading="lazy" />
            {section.caption && <p className="cs-caption">{section.caption}</p>}
          </div>
        </div>
      );
    case 'image-grid':
      return (
        <div key={i} className="cs-section">
          <div className="cs-image-grid">
            {section.images.map((img, j) => (
              <div key={j} className="cs-image">
                <img src={img.src} alt={img.alt} loading="lazy" />
                {img.caption && <p className="cs-caption">{img.caption}</p>}
              </div>
            ))}
          </div>
        </div>
      );
    case 'list':
      return (
        <div key={i} className="cs-section">
          {section.heading && <h3 className="cs-heading">{section.heading}</h3>}
          <ol className="cs-list">
            {section.items.map((item, j) => <li key={j}>{item}</li>)}
          </ol>
        </div>
      );
    case 'figma-embed':
      return <FigmaEmbed key={i} section={section} />;
    default:
      return null;
  }
}

export default function CaseStudyPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data: caseStudies, loading, updateField } = useAdminContent('caseStudies');
  const { data: projects } = useAdminContent('projects');
  const { isAdmin } = useAdmin();

  const study = caseStudies?.[slug];

  // Compute next/prev from the projects list (same order as home page)
  const projectList = Array.isArray(projects) ? projects : [];
  const currentIdx = projectList.findIndex(p => p.slug === slug);
  const nextProject = currentIdx >= 0 && currentIdx < projectList.length - 1 ? projectList[currentIdx + 1] : null;
  const prevProject = currentIdx > 0 ? projectList[currentIdx - 1] : null;
  const [showToast, setShowToast] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const pageRef = useRef(null);

  // Helper: update a field scoped to the current study slug
  const update = (path, val) => updateField(`${slug}.${path}`, val);

  const goToProjects = (e) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: 'projects' } });
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!study?.fullWidth) return;
    const check = () => setShowToast(window.innerWidth < 1280);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [study?.fullWidth]);

  // Scroll-triggered animations for fullWidth pages
  useEffect(() => {
    if (!study?.fullWidth) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cs-anim-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll('.cs-row-animate').forEach((el) => observer.observe(el));
    }, 200);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [study?.fullWidth, slug]);

  // Loading / not found states
  if (loading) {
    return (
      <section className="case-study case-study--page">
        <div className="case-study-wrap" style={{ padding: '80px 24px', color: '#888' }}>
          Loading…
        </div>
      </section>
    );
  }

  if (!study) {
    return (
      <section className="case-study case-study--page">
        <div className="case-study-wrap">
          <button onClick={goToProjects} className="back-link" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back</span>
          </button>
          <h1 className="section-title">Case study not found</h1>
        </div>
      </section>
    );
  }

  // ── Full-width layout (Yonder AI, Right Reach, DTE Insight) ──────────────
  if (study.fullWidth) {
    return (
      <section className="case-study case-study--page case-study--fullwidth">
        {showToast && (
          <div className="cs-toast">
            This page is not optimized for smaller width pages
          </div>
        )}

        <div className="cs-fw-wrap">
          <a href="/#projects" onClick={goToProjects} className="back-link back-link--arrow-only">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* ── Two-column intro: left = title/overview/meta, right = hero image OR text sections ── */}
          <div className="cs-intro-columns">
            {/* Left — title, overview, role + team */}
            <div className={`cs-intro-left${!study.heroImage ? ' cs-intro-left--plain' : ''}`}>
              <h1 className="section-title cs-intro-title">
                {isAdmin ? (
                  <EditableText value={study.title} onSave={(val) => update('title', val)} multiline={false} />
                ) : study.title}
              </h1>
              <p className="cs-intro-overview">
                {isAdmin ? (
                  <EditableText value={study.overview} onSave={(val) => update('overview', val)} />
                ) : study.overview}
              </p>
              <div className="cs-intro-meta">
                <div className="case-study-meta-item">
                  <span className="case-study-meta-label">Role</span>
                  <span className="case-study-meta-value">
                    {isAdmin ? (
                      <EditableText value={study.role} onSave={(val) => update('role', val)} multiline={false} />
                    ) : study.role}
                  </span>
                </div>
                <div className="case-study-meta-item">
                  <span className="case-study-meta-label">Team</span>
                  <span className="case-study-meta-value">
                    {isAdmin ? (
                      <EditableText value={study.team} onSave={(val) => update('team', val)} multiline={false} />
                    ) : study.team}
                  </span>
                </div>
              </div>
            </div>

            {/* Right — hero image if present, otherwise standaloneTexts fill this column */}
            {study.heroImage ? (
              <div className="cs-intro-right">
                {isAdmin ? (
                  <EditableImage
                    src={study.heroImage}
                    alt={study.title}
                    onSrcChange={(url) => update('heroImage', url)}
                  />
                ) : (
                  <img
                    src={study.heroImage}
                    alt={study.title}
                    style={study.heroScale ? { transform: `scale(${study.heroScale})`, transformOrigin: 'center center' } : undefined}
                  />
                )}
              </div>
            ) : study.standaloneTexts ? (
              <div className="cs-intro-right--text">
                {study.standaloneTexts.map((block, i) => (
                  <div key={i} className="cs-intro-text-block">
                    <h3 className="cs-row-heading">
                      {isAdmin ? (
                        <EditableText value={block.heading} onSave={(val) => update(`standaloneTexts.${i}.heading`, val)} multiline={false} />
                      ) : block.heading}
                    </h3>
                    {isAdmin ? (
                      Array.isArray(block.text)
                        ? block.text.map((t, j) => (
                            <p key={j} className="cs-row-body">
                              <EditableText value={t} onSave={(val) => update(`standaloneTexts.${i}.text.${j}`, val)} />
                            </p>
                          ))
                        : <p className="cs-row-body">
                            <EditableText value={block.text} onSave={(val) => update(`standaloneTexts.${i}.text`, val)} />
                          </p>
                    ) : renderParagraphs(block.text)}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* When no hero image: Figma embed renders directly below the two-column intro */}
          {!study.heroImage && (study.rows ?? []).length > 0 && (
            <div className="cs-rows">
              {(study.rows ?? []).map((row, i) => {
                if (row.figmaEmbed) {
                  return (
                    <div key={i} className="cs-figma-row cs-row-animate">
                      <FigmaEmbed section={row} />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}

          {/* Standalone text blocks — only for studies WITH a hero image (otherwise shown in right column above) */}
          {study.heroImage && study.standaloneTexts && study.standaloneTexts.map((block, i) => (
            <div key={`st-${i}`} className={`cs-standalone-text${block.leftAlign ? ' cs-standalone-text--left' : ''}`}>
              <h3 className="cs-row-heading">
                {isAdmin ? (
                  <EditableText value={block.heading} onSave={(val) => update(`standaloneTexts.${i}.heading`, val)} multiline={false} />
                ) : block.heading}
              </h3>
              {isAdmin ? (
                Array.isArray(block.text)
                  ? block.text.map((t, j) => (
                      <p key={j} className="cs-row-body">
                        <EditableText value={t} onSave={(val) => update(`standaloneTexts.${i}.text.${j}`, val)} />
                      </p>
                    ))
                  : <p className="cs-row-body">
                      <EditableText value={block.text} onSave={(val) => update(`standaloneTexts.${i}.text`, val)} />
                    </p>
              ) : renderParagraphs(block.text)}
            </div>
          ))}

          {/* Alternating image-text rows (skipped for no-hero studies — already rendered above) */}
          <div className="cs-rows">
            {(() => {
              // When no heroImage, rows were already rendered right after the intro
              if (!study.heroImage) return null;
              let gridIdx = 0;
              return (study.rows ?? []).map((row, i) => {
                /* ── Text-only block ── */
                if (row.textOnly) {
                  return (
                    <div key={i} className="cs-standalone-text cs-row-animate cs-row-text-animated">
                      {row.heading && (
                        <h3 className="cs-row-heading">
                          {isAdmin ? (
                            <EditableText value={row.heading} onSave={(val) => update(`rows.${i}.heading`, val)} multiline={false} />
                          ) : row.heading}
                        </h3>
                      )}
                      {isAdmin
                        ? (Array.isArray(row.text)
                            ? row.text.map((t, j) => (
                                <p key={j} className="cs-row-body">
                                  <EditableText value={t} onSave={(val) => update(`rows.${i}.text.${j}`, val)} />
                                </p>
                              ))
                            : <p className="cs-row-body"><EditableText value={row.text} onSave={(val) => update(`rows.${i}.text`, val)} /></p>
                          )
                        : renderParagraphs(row.text)
                      }
                    </div>
                  );
                }

                /* ── Vision layout: centered text + image below ── */
                if (row.visionLayout) {
                  return (
                    <div key={i} className="cs-vision-block cs-row-animate">
                      <div className="cs-vision-text">
                        {row.heading && (
                          <h3 className="cs-row-heading">
                            {isAdmin ? (
                              <EditableText value={row.heading} onSave={(val) => update(`rows.${i}.heading`, val)} multiline={false} />
                            ) : row.heading}
                          </h3>
                        )}
                        {isAdmin
                          ? <p className="cs-row-body"><EditableText value={row.text} onSave={(val) => update(`rows.${i}.text`, val)} /></p>
                          : renderParagraphs(row.text)
                        }
                      </div>
                      {row.image && (
                        <div className="cs-vision-image">
                          {isAdmin ? (
                            <EditableImage
                              src={row.image.src}
                              alt={row.image.alt}
                              zoom={row.image.zoom ?? 1}
                              onSrcChange={(url) => update(`rows.${i}.image.src`, url)}
                              onZoomChange={(z) => update(`rows.${i}.image.zoom`, z)}
                            />
                          ) : (
                            <img
                              src={row.image.src}
                              alt={row.image.alt}
                              loading="lazy"
                              style={row.image.zoom && row.image.zoom !== 1 ? { transform: `scale(${row.image.zoom})`, transformOrigin: 'center center' } : undefined}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  );
                }

                /* ── Standalone 2×2 column-flow grid (no text column) ── */
                if (row.standaloneGrid) {
                  const gridImages = row.images || [];
                  return (
                    <div key={i} className="cs-standalone-grid cs-row-animate">
                      {gridImages.map((img, j) => {
                        if (isAdmin) {
                          return (
                            <EditableImage
                              key={j}
                              src={img.src}
                              alt={img.alt}
                              zoom={img.zoom ?? 1}
                              onSrcChange={(url) => update(`rows.${i}.images.${j}.src`, url)}
                              onZoomChange={(z) => update(`rows.${i}.images.${j}.zoom`, z)}
                            />
                          );
                        }
                        return <img key={j} src={img.src} alt={img.alt} loading="lazy" />;
                      })}
                    </div>
                  );
                }

                /* ── Standalone centered image ── */
                if (row.standalone) {
                  return (
                    <div key={i} className="cs-standalone-image cs-row-animate">
                      {isAdmin ? (
                        <EditableImage
                          src={row.image.src}
                          alt={row.image.alt}
                          zoom={row.image.zoom ?? 1}
                          onSrcChange={(url) => update(`rows.${i}.image.src`, url)}
                          onZoomChange={(z) => update(`rows.${i}.image.zoom`, z)}
                        />
                      ) : (
                        <img
                          src={row.image.src}
                          alt={row.image.alt}
                          loading="lazy"
                          style={row.image.zoom && row.image.zoom !== 1 ? { transform: `scale(${row.image.zoom})`, transformOrigin: 'center center' } : undefined}
                        />
                      )}
                    </div>
                  );
                }

                /* ── Figma prototype embed row ── */
                if (row.figmaEmbed) {
                  return (
                    <div key={i} className="cs-figma-row cs-row-animate">
                      <FigmaEmbed section={row} />
                    </div>
                  );
                }

                /* ── Regular image-text grid row ── */
                const rowImages = row.images || (row.image ? [row.image] : []);
                const isMulti = rowImages.length > 1;
                const isImgRight = gridIdx % 2 === 0;
                gridIdx++;

                let imgClass = 'cs-row-image cs-parallax';
                if (row.noBg) imgClass += ' cs-row-image--no-bg';
                if (row.gridLayout === '1-2') imgClass += ' cs-row-image--grid-1-2';
                else if (row.diagonal) imgClass += ' cs-row-image--diagonal';
                else if (isMulti) imgClass += ' cs-row-image--grid';

                const imgStyle = {};
                if (isMulti && !row.gridLayout && !row.diagonal) {
                  imgStyle['--grid-cols'] = row.gridCols || 1;
                }

                const rowClass = [
                  'cs-row cs-row-animate',
                  isImgRight ? 'cs-row--img-right' : 'cs-row--img-left',
                  (row.wideImage || study.wideRows) ? 'cs-row--wide' : '',
                ].filter(Boolean).join(' ');

                return (
                  <div key={i} className={rowClass}>
                    <div
                      className={imgClass}
                      style={Object.keys(imgStyle).length ? imgStyle : undefined}
                    >
                      {rowImages.map((img, j) => {
                        const imgZoom = img.zoom ?? 1;
                        const imgZoomStyle = imgZoom !== 1 ? { transform: `scale(${imgZoom})`, transformOrigin: 'center center' } : undefined;
                        if (isAdmin) {
                          return (
                            <EditableImage
                              key={j}
                              src={img.src}
                              alt={img.alt}
                              zoom={imgZoom}
                              onSrcChange={(url) => {
                                const field = row.images
                                  ? `rows.${i}.images.${j}.src`
                                  : `rows.${i}.image.src`;
                                update(field, url);
                              }}
                              onZoomChange={(z) => {
                                const field = row.images
                                  ? `rows.${i}.images.${j}.zoom`
                                  : `rows.${i}.image.zoom`;
                                update(field, z);
                              }}
                            />
                          );
                        }
                        return (
                          <img
                            key={j}
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            style={imgZoomStyle}
                          />
                        );
                      })}
                    </div>
                    {(row.heading || row.text) ? (
                      <div className="cs-row-text cs-row-text-animated">
                        <div className="cs-row-connector" aria-hidden="true"></div>
                        {row.heading && (
                          <h3 className="cs-row-heading">
                            {isAdmin ? (
                              <EditableText value={row.heading} onSave={(val) => update(`rows.${i}.heading`, val)} multiline={false} />
                            ) : row.heading}
                          </h3>
                        )}
                        {isAdmin
                          ? (Array.isArray(row.text)
                              ? row.text.map((t, j) => (
                                  <p key={j} className="cs-row-body">
                                    <EditableText value={t} onSave={(val) => update(`rows.${i}.text.${j}`, val)} />
                                  </p>
                                ))
                              : row.text
                                ? <p className="cs-row-body"><EditableText value={row.text} onSave={(val) => update(`rows.${i}.text`, val)} /></p>
                                : null
                            )
                          : renderParagraphs(row.text)
                        }
                      </div>
                    ) : (
                      <div className="cs-row-text"></div>
                    )}
                  </div>
                );
              });
            })()}
          </div>

          {/* Closing content — either interleaved closingBlocks or legacy closingImages + closingTexts */}
          {study.closingBlocks ? (
            study.closingBlocks.map((block, i) => {
              if (block.type === 'image') {
                const ciClass = `cs-closing-image${block.originalSize ? ' cs-closing-image--original-size' : ''}`;
                return (
                  <div key={`cb-${i}`} className={ciClass}>
                    {isAdmin ? (
                      <EditableImage
                        src={block.src}
                        alt={block.alt}
                        zoom={block.zoom ?? 1}
                        onSrcChange={(url) => update(`closingBlocks.${i}.src`, url)}
                        onZoomChange={(z) => update(`closingBlocks.${i}.zoom`, z)}
                      />
                    ) : (
                      <img
                        src={block.src}
                        alt={block.alt}
                        loading="lazy"
                        style={block.zoom && block.zoom !== 1 ? { transform: `scale(${block.zoom})`, transformOrigin: 'center center' } : undefined}
                      />
                    )}
                  </div>
                );
              }
              if (block.type === 'text') {
                return (
                  <div key={`cb-${i}`} className="cs-standalone-text">
                    <h3 className="cs-row-heading">
                      {isAdmin ? (
                        <EditableText value={block.heading} onSave={(val) => update(`closingBlocks.${i}.heading`, val)} multiline={false} />
                      ) : block.heading}
                    </h3>
                    {isAdmin
                      ? (Array.isArray(block.text)
                          ? block.text.map((t, j) => (
                              <p key={j} className="cs-row-body">
                                <EditableText value={t} onSave={(val) => update(`closingBlocks.${i}.text.${j}`, val)} />
                              </p>
                            ))
                          : <p className="cs-row-body"><EditableText value={block.text} onSave={(val) => update(`closingBlocks.${i}.text`, val)} /></p>
                        )
                      : renderParagraphs(block.text)
                    }
                  </div>
                );
              }
              return null;
            })
          ) : (
            <>
              {/* Closing images — centered standalone (shown FIRST) */}
              {study.closingImages && study.closingImages.map((img, i) => (
                <div key={`ci-${i}`} className={`cs-closing-image${img.originalSize ? ' cs-closing-image--original-size' : ''}`}>
                  {isAdmin ? (
                    <EditableImage
                      src={img.src}
                      alt={img.alt}
                      zoom={img.zoom ?? 1}
                      onSrcChange={(url) => update(`closingImages.${i}.src`, url)}
                      onZoomChange={(z) => update(`closingImages.${i}.zoom`, z)}
                    />
                  ) : (
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      style={img.zoom && img.zoom !== 1 ? { transform: `scale(${img.zoom})`, transformOrigin: 'center center' } : undefined}
                    />
                  )}
                </div>
              ))}

              {/* Closing standalone text blocks (shown AFTER images) */}
              {study.closingTexts && study.closingTexts.map((block, i) => (
                <div key={`ct-${i}`} className="cs-standalone-text">
                  <h3 className="cs-row-heading">
                    {isAdmin ? (
                      <EditableText value={block.heading} onSave={(val) => update(`closingTexts.${i}.heading`, val)} multiline={false} />
                    ) : block.heading}
                  </h3>
                  {isAdmin
                    ? (Array.isArray(block.text)
                        ? block.text.map((t, j) => (
                            <p key={j} className="cs-row-body">
                              <EditableText value={t} onSave={(val) => update(`closingTexts.${i}.text.${j}`, val)} />
                            </p>
                          ))
                        : <p className="cs-row-body"><EditableText value={block.text} onSave={(val) => update(`closingTexts.${i}.text`, val)} /></p>
                      )
                    : renderParagraphs(block.text)
                  }
                </div>
              ))}
            </>
          )}

          <div className="case-study-bottom-nav">
            <a href="/#projects" onClick={goToProjects} className="back-link">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Back to Case Studies</span>
            </a>
            {nextProject && (
              <a href={`/case-study/${nextProject.slug}`} className="back-link cs-next-link">
                <span>Next Case Study</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {showBackToTop && (
          <button
            type="button"
            className="cs-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </section>
    );
  }

  // ── Standard layout (Upwork, Kroger WIP pages) ───────────────────────────
  return (
    <section className="case-study case-study--page">
      <div className="case-study-wrap">
        <a href="/#projects" onClick={goToProjects} className="back-link">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Back</span>
        </a>

        <div className="case-study-header">
          <h1 className="section-title">
            {isAdmin ? (
              <EditableText value={study.title} onSave={(val) => update('title', val)} multiline={false} />
            ) : study.title}
          </h1>
          <p className="case-study-subtitle">
            {isAdmin ? (
              <EditableText value={study.subtitle} onSave={(val) => update('subtitle', val)} multiline={false} />
            ) : study.subtitle}
          </p>
          {study.wip && <span className="case-study-wip-badge">Work in Progress</span>}
        </div>

        <div className="case-study-hero-image">
          {isAdmin ? (
            <EditableImage
              src={study.heroImage}
              alt={study.title}
              onSrcChange={(url) => update('heroImage', url)}
            />
          ) : (
            <img src={study.heroImage} alt={study.title} />
          )}
        </div>

        <div className="case-study-overview case-study-overview--above-meta">
          <p>
            {isAdmin ? (
              <EditableText value={study.overview} onSave={(val) => update('overview', val)} />
            ) : study.overview}
          </p>
        </div>

        <div className="case-study-meta">
          <div className="case-study-meta-item">
            <span className="case-study-meta-label">Role</span>
            <span className="case-study-meta-value">
              {isAdmin ? (
                <EditableText value={study.role} onSave={(val) => update('role', val)} multiline={false} />
              ) : study.role}
            </span>
          </div>
          <div className="case-study-meta-item">
            <span className="case-study-meta-label">Team</span>
            <span className="case-study-meta-value">
              {isAdmin ? (
                <EditableText value={study.team} onSave={(val) => update('team', val)} multiline={false} />
              ) : study.team}
            </span>
          </div>
        </div>

        <div className="case-study-content">
          {(study.sections ?? []).map((section, i) => renderSection(section, i))}
        </div>

        <div className="case-study-bottom-nav">
          <a href="/#projects" onClick={goToProjects} className="back-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to Case Studies</span>
          </a>
        </div>
      </div>

      {showBackToTop && (
        <button
          type="button"
          className="cs-back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </section>
  );
}
