import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/Research.css';
import { useAdminContent } from '../admin/useAdminContent.js';
import { EditableText } from '../admin/EditableText.jsx';
import { useAdmin } from '../admin/AdminContext.jsx';

const FALLBACK = {
  publications: [],
  talks: [],
  presentations: [],
};

export default function PublicationsPage() {
  const { data, loading, updateField } = useAdminContent('publications');
  const { isAdmin } = useAdmin();

  const { publications, talks, presentations } = data ?? FALLBACK;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="research research--page">
      <div className="research-wrap">
        <Link to="/" className="back-link">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Back</span>
        </Link>

        <h1 className="section-title">Publications</h1>
        <p className="research-intro">
          My academic research interests span across Behavioral Economics, Theory of Mind,
          and Evolutionary Cognition. Ad-hoc reviewer for Plos One, Animal Behavior &amp; Cognition,
          Evolutionary Psychology.
        </p>

        <div className="research-section">
          <h3 className="research-heading">Published Work</h3>
          <div className="research-list">
            {(publications ?? []).map((pub, i) => (
              <div key={i} className="research-item">
                <div className="research-item-row">
                  <div>
                    <p className="research-item-title">
                      {isAdmin ? (
                        <EditableText value={pub.title} onSave={(val) => updateField(`publications.${i}.title`, val)} multiline={false} />
                      ) : pub.title}
                    </p>
                    <p className="research-item-authors">
                      {isAdmin ? (
                        <EditableText value={pub.authors} onSave={(val) => updateField(`publications.${i}.authors`, val)} multiline={false} />
                      ) : pub.authors}
                    </p>
                    {pub.journal && (
                      <p className="research-item-journal">
                        {isAdmin ? (
                          <EditableText value={pub.journal} onSave={(val) => updateField(`publications.${i}.journal`, val)} multiline={false} />
                        ) : pub.journal}
                      </p>
                    )}
                  </div>
                  {pub.downloadUrl && (
                    <a href={pub.downloadUrl} className="research-download" title="Download" target="_blank" rel="noopener noreferrer">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 2v10m0 0l-3.5-3.5M9 12l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span>Download</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="research-section">
          <h3 className="research-heading">Talks</h3>
          <div className="research-list">
            {(talks ?? []).map((talk, i) => (
              <div key={i} className="research-item">
                <div className="research-item-row">
                  <div>
                    <p className="research-item-title">
                      {isAdmin ? (
                        <EditableText value={talk.title} onSave={(val) => updateField(`talks.${i}.title`, val)} multiline={false} />
                      ) : talk.title}
                    </p>
                    <p className="research-item-venue">
                      {isAdmin ? (
                        <EditableText value={talk.venue} onSave={(val) => updateField(`talks.${i}.venue`, val)} multiline={false} />
                      ) : talk.venue}
                    </p>
                    {talk.coauthors && (
                      <p className="research-item-authors">
                        {isAdmin ? (
                          <EditableText value={talk.coauthors} onSave={(val) => updateField(`talks.${i}.coauthors`, val)} multiline={false} />
                        ) : talk.coauthors}
                      </p>
                    )}
                  </div>
                  <span className="research-item-year">{talk.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="research-section">
          <h3 className="research-heading">Presentations</h3>
          <div className="research-list">
            {(presentations ?? []).map((pres, i) => (
              <div key={i} className="research-item">
                <p className="research-item-title">
                  {isAdmin ? (
                    <EditableText value={pres.title} onSave={(val) => updateField(`presentations.${i}.title`, val)} multiline={false} />
                  ) : pres.title}
                </p>
                <p className="research-item-venue">
                  {isAdmin ? (
                    <EditableText value={pres.venue} onSave={(val) => updateField(`presentations.${i}.venue`, val)} multiline={false} />
                  ) : pres.venue}
                </p>
                {pres.coauthors && (
                  <p className="research-item-authors">
                    {isAdmin ? (
                      <EditableText value={pres.coauthors} onSave={(val) => updateField(`presentations.${i}.coauthors`, val)} multiline={false} />
                    ) : pres.coauthors}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="research-bottom-nav">
          <Link to="/" className="back-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
