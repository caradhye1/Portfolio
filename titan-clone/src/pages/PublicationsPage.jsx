import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/Research.css';

const publications = [
  {
    title: 'Trying Not to Spend',
    authors: 'Mary C. Gilly, Mary Finley Celsi, Stephanie Dellande, Hope Jensen Schau, Russel Nelson, Chin-May Aradhye',
    journal: 'Journal of the Academy of Marketing Science (2025) 53:1506\u20131526',
    downloadUrl: 'https://www.chin-may.com/_files/ugd/a0fcc9_34e6cc88805f4fdaa2f6c4be0bb1432c.pdf',
  },
  {
    title: 'Believe What I Believe: Correspondence Between the Beliefs of Young Adults and the Perceived Beliefs of Their Caregivers',
    authors: 'Vonk, Zeigler-Hill, Cater, & Aradhye (2019)',
    journal: 'The Journal of Genetic Psychology',
    downloadUrl: 'https://www.chin-may.com/_files/ugd/a0fcc9_97e74b825ced492d92589e980a006fb5.pdf',
  },
  {
    title: "Adults' Responsiveness to Children's Facial Expression",
    authors: 'Aradhye, C. & Vonk, J., Arida, D. (2015)',
    journal: 'Journal of Experimental Child Psychology, 135, 56-71',
    downloadUrl: 'https://docs.wixstatic.com/ugd/a0fcc9_b9aacfc1e48149c390901f7c37fa0be8.pdf',
  },
  {
    title: 'Evolution of Cognition',
    authors: 'Vonk, J. & Aradhye, C. (2015)',
    journal: 'In Basics in Human Evolution, 1st Edition, Academic Press, pp 379-388',
    downloadUrl: 'https://docs.wixstatic.com/ugd/a0fcc9_f06dfb2cd53145b4ad4356605f386716.pdf',
  },
  {
    title: 'Theory of Mind in Grandiose and Vulnerable Facets of Narcissism',
    authors: 'Aradhye, C. (2016)',
    journal: 'In The Handbook of Personality and Individual Differences, Springer Intl.',
    downloadUrl: 'https://docs.wixstatic.com/ugd/a0fcc9_3d4614548f7d4db1836d6557ed51e6cc.pdf',
  },
  {
    title: 'Mate Preferences Among College Students with Special Reference to Gender Differences',
    authors: 'Mardhekar, V., & Aradhye, C. (2010)',
    journal: 'Journal of Psychosocial Research, Vol. 5',
    downloadUrl: '',
  },
];

const talks = [
  {
    title: 'Status & Reputation in Economic Exchange',
    venue: 'Annual Convention of the American Psychological Association, Toronto, Canada',
    year: '2015',
    coauthors: 'With Jennifer Vonk & Poorva Kulkarni',
  },
  {
    title: 'Infant Expression and Adult Responsiveness',
    venue: '85th Annual Meeting of the Midwestern Psychological Association, Chicago, IL',
    year: '2014',
    coauthors: 'With Jennifer Vonk & Danielle Arida',
  },
  {
    title: 'Human Mate Selection and Implications for Marital Counseling',
    venue: 'Dept. of Counseling Psychology, University of Pune',
    year: '2009',
    coauthors: '',
  },
];

const presentations = [
  {
    title: 'Cognitive Responsiveness of Adults to Infant Facial Expressions',
    venue: '25th Annual Meeting of Human Behavior and Evolution Society, Miami, FL, 2013',
    coauthors: 'With Arida, D., & Vonk, J.',
  },
  {
    title: 'Are Mate Preferences in Young Adults Influenced by Their Parental Relationships?',
    venue: '25th Annual Meeting of Human Behavior and Evolution Society, Miami, FL, 2013',
    coauthors: 'With Vonk, J.',
  },
  {
    title: 'Theory of Mind among Narcissists: Examining Grandiose and Vulnerable Subtypes',
    venue: '85th Annual Meeting of the Midwestern Psychological Association, Chicago, IL, 2013',
    coauthors: 'With Vonk, J., & Zeigler-Hill, V.',
  },
  {
    title: 'Reducing Racial Prejudice and Discrimination: Students\u2019 Perspectives',
    venue: '16th Annual Ball State University Student Symposium, Muncie, IN, 2011',
    coauthors: 'With Pasay, B.M., Kaczmarek, K., Whitehead, K.D., Schoor, R.A., & Butchko, M.S.',
  },
  {
    title: 'Gender Differences in Reported Life Values',
    venue: 'The National Seminar on Recent Trends in Psychology, Pune, Maharashtra, 2009',
    coauthors: '',
  },
];

export default function PublicationsPage() {
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
            {publications.map((pub, i) => (
              <div key={i} className="research-item">
                <div className="research-item-row">
                  <div>
                    <p className="research-item-title">{pub.title}</p>
                    <p className="research-item-authors">{pub.authors}</p>
                    {pub.journal && <p className="research-item-journal">{pub.journal}</p>}
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
            {talks.map((talk, i) => (
              <div key={i} className="research-item">
                <div className="research-item-row">
                  <div>
                    <p className="research-item-title">{talk.title}</p>
                    <p className="research-item-venue">{talk.venue}</p>
                    {talk.coauthors && <p className="research-item-authors">{talk.coauthors}</p>}
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
            {presentations.map((pres, i) => (
              <div key={i} className="research-item">
                <p className="research-item-title">{pres.title}</p>
                <p className="research-item-venue">{pres.venue}</p>
                {pres.coauthors && <p className="research-item-authors">{pres.coauthors}</p>}
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
