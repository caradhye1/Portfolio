import './Research.css';

const publications = [
  {
    title: 'Trying Not to Spend',
    authors: 'Mary C. Gilly, Mary Finley Celsi, Stephanie Dellande, Hope Jensen Schau, Russel Nelson, Chin-May Aradhye',
    type: 'publication',
  },
  {
    title: 'Believe What I Believe: Correspondence Between the Beliefs of Young Adults and the Perceived Beliefs of Their Caregivers',
    authors: 'Vonk, Zeigler-Hill, Cater, & Aradhye (2019)',
    journal: 'The Journal of Genetic Psychology',
    type: 'publication',
  },
  {
    title: "Adults' Responsiveness to Children's Facial Expression",
    authors: 'Aradhye, C. & Vonk, J., Arida, D. (2015)',
    journal: 'Journal of Experimental Child Psychology, 135, 56-71',
    type: 'publication',
  },
  {
    title: 'Evolution of Cognition',
    authors: 'Vonk, J. & Aradhye, C. (2015)',
    journal: 'In Basics in Human Evolution, 1st Edition, Academic Press, pp 379-388',
    type: 'publication',
  },
  {
    title: 'Theory of Mind in Grandiose and Vulnerable Facets of Narcissism',
    authors: 'Aradhye, C. (2016)',
    journal: 'In The Handbook of Personality and Individual Differences, Springer Intl.',
    type: 'publication',
  },
  {
    title: 'Mate Preferences Among College Students with Special Reference to Gender Differences',
    authors: 'Mardhekar, V., & Aradhye, C. (2010)',
    journal: 'Journal of Psychosocial Research, Vol. 5',
    type: 'publication',
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

export default function Research() {
  return (
    <section className="research" id="research">
      <div className="research-wrap">
        <h2 className="section-title">Academic Research</h2>
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
                <p className="research-item-title">{pub.title}</p>
                <p className="research-item-authors">{pub.authors}</p>
                {pub.journal && <p className="research-item-journal">{pub.journal}</p>}
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
                  <p className="research-item-title">{talk.title}</p>
                  <span className="research-item-year">{talk.year}</span>
                </div>
                <p className="research-item-venue">{talk.venue}</p>
                {talk.coauthors && <p className="research-item-authors">{talk.coauthors}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
