/**
 * chin-may.com — Extracted Site Content
 * Source pages: chin-may.com (home) + chin-may.com/work
 * Scraped: 2026-03-23
 *
 * Usage: import or reference these labeled constants when building
 * a new portfolio HTML/CSS page. All image URLs point to the original
 * Wix CDN assets (full resolution, no Wix resize transforms applied).
 */

// ─────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────
export const META = {
  siteTitle:    "Chinmay Aradhye — User Experience | Behavioral Science | Michigan",
  ownerName:    "Chinmay Aradhye",
  shortName:    "Chin-May",
  location:     "Ann Arbor, Michigan",
  copyright:    "©2025 by Chinmay Aradhye",
};

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────
export const NAV = {
  logo:  "CHIN-MAY",
  links: ["About", "Research", "Photography", "Contact"],
  cta:   "Get in Touch",
};

// ─────────────────────────────────────────────
// IMAGES  (original Wix CDN — no resize params)
// ─────────────────────────────────────────────
export const IMAGES = {
  // Portrait headshot used on /work page (349×456 rendered)
  portrait:
    "https://static.wixstatic.com/media/a0fcc9_73c9fd1bd32042e2a12f7e4aee7c2edc~mv2.jpg",

  // Blurred background / hero photo used on home page
  heroBg:
    "https://static.wixstatic.com/media/a0fcc9_59897048c02a4de5b67f5bf71103b095~mv2.jpg",

  // Project thumbnail images (566×565 rendered on /work)
  projects: {
    yonderAI:
      "https://static.wixstatic.com/media/a0fcc9_9f1a4ccb5cc041a39e4aa64b813167b1~mv2.jpg",
    financialWellness:
      "https://static.wixstatic.com/media/a0fcc9_ed32c29c9c224ebbb1c0df4777035780~mv2.png",
    energySavings:
      "https://static.wixstatic.com/media/a0fcc9_49c6223098b8453a9970025226668027~mv2.png",
    upworkProfile:
      "https://static.wixstatic.com/media/a0fcc9_1b1da8fd7a07459587247c0a6da0ad80~mv2.png",
    upworkBrowse:
      "https://static.wixstatic.com/media/a0fcc9_79d3c6babb62478491113759229886d4~mv2.png",
  },
};

// ─────────────────────────────────────────────
// HOME PAGE — HERO SECTION
// ─────────────────────────────────────────────
export const HERO = {
  greeting:    "Hi I am Chin-May",
  tagline:     "User Experience | Behavioral Science | Michigan",
  description: [
    "I'm an experienced digital product designer with a special interest in AI / ML, data science, and business.",
    "I recently finished my PhD in Cognitive Psychology with a focus on decision-making and evolutionary cognition.",
    "Outside of work, I love soccer, coffee, metal ballads, and philosophy.",
  ],
};

// ─────────────────────────────────────────────
// WORK PAGE — BIO / INTRO
// ─────────────────────────────────────────────
export const WORK_BIO = {
  heading: "Selected Product Portfolio (under construction...)",
  bio: `Hi I'm Chin-May & I've built digital products for the last 10 years.

I've been fortunate to play various roles in design teams, which has made me a better team player.

With 2x startup exits as lead designer - startups & growth have a special place in my heart.`,
};

// ─────────────────────────────────────────────
// PROJECTS  (from /work page)
// ─────────────────────────────────────────────
export const PROJECTS = [
  {
    id:        "yonder-ai",
    title:     "Yonder AI — Social Media Intelligence for Brands",
    image:     IMAGES.projects.yonderAI,
    imageAlt:  "Yonder AI project — Narrative Details Q4 Edits",
    wip:       false,
  },
  {
    id:        "financial-wellness",
    title:     "Financial Wellness Onboarding",
    image:     IMAGES.projects.financialWellness,
    imageAlt:  "Financial Wellness Onboarding project",
    wip:       false,
  },
  {
    id:        "energy-savings",
    title:     "Energy Savings Using Behavioral Design",
    image:     IMAGES.projects.energySavings,
    imageAlt:  "Energy Savings project",
    wip:       false,
  },
  {
    id:        "upwork-profile",
    title:     "Upwork Profile Preview",
    image:     IMAGES.projects.upworkProfile,
    imageAlt:  "Upwork Profile Preview project",
    wip:       true,
  },
  {
    id:        "upwork-browse",
    title:     "Upwork Browse Experience",
    image:     IMAGES.projects.upworkBrowse,
    imageAlt:  "Upwork Browse Experience project",
    wip:       true,
  },
];

// ─────────────────────────────────────────────
// TESTIMONIALS / RECOMMENDATIONS
// (same pool appears on both home + /work pages)
// ─────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name:  "Krystian Cybulski",
    title: "Director of Product Engineering, Career Karma, Ex-15Five",
    quote: "My 1:1s with Chin May were one of the highlights of my week. He and I collaborated at Career Karma, putting the foundations in place for the cooperation of design, product, and engineering teams. Chin May brings a wealth of wisdom, and delivers it in the most amicable way I've had the pleasure of experiencing. He regularly offered new and novel perspectives on non-trivial problems, and is an incredible collaborator, motivator, and ideator.",
  },
  {
    name:  "Aditi Suryanarayan",
    title: "Sr UX Researcher at AnswerLab",
    quote: "I can speak with conviction, not only to his outstanding strategic thinking but also his ability to build products from scratch. He stands out in the way he uses his user experience skills while making decisions that improve the organization as a whole, demonstrating remarkable business acumen.",
  },
  {
    name:  "Francesco Marcellino",
    title: "Director of Design @ Dynatrance",
    quote: "Constantly driven by a very healthy and contagious curiosity going well beyond his main crafts (i.e. human factors, behavioral science), Chin-may is able to systematically turn observation and data into key strategic insights that help innovation teams identify and focus on the most important things first. I wholeheartedly recommend Chin-may to anyone looking to improve their customer relationships and transform their business.",
  },
  {
    name:  "Irene Georgiou",
    title: "Principal Designer, Slack — Ex-Kayak",
    quote: "Chin-May is a brilliant and gifted manager who really understands how to get the best out of people. I had the pleasure of working with him at Career Karma, collaborating on several design projects. Chin-May's biggest strength is his ability to think deeply about the users' problems, conduct research to validate assumptions and make sure we are solving the right problem. I was particularly impressed by Chin-May's ability to handle even the toughest conversations effortlessly. He never loses his cool which is one of the reasons he stands out as a manager. Any employee would be lucky to have Chin-May as a manager!",
  },
  {
    name:  "Matt Metropulos",
    title: "Digital Design Director at Rivian",
    quote: "Chin-may was not only able to deliver high quality research insights, but also significantly contributed to product strategy and business outcomes. He is exceptional at communicating complex ideas in a way that is clear and actionable.",
  },
  {
    name:  "Weiran Ma",
    title: "UX/UI Designer & Researcher @ Greenpath Financial Wellness",
    quote: "As a director, Chin-may excels at supervising, guiding, and motivating members in his product teams. His profound understanding of human-computer interaction, data science, and behavioral economics enabled him to accurately identify solutions needed to improve the corporate digital strategy.",
  },
  {
    name:  "Nguyet Ly",
    title: "Sr Product Designer, Career Karma — Ex-Expedia",
    quote: "I had the privilege of working with Chin-May at Career Karma. I'm grateful for this mentorship and guidance on problem discovery, user journey mapping, and countless other design problems. With Chin-May, problems are only seen as opportunities to improve our product for the end users. He built the design team from the ground up and instilled our best design and research practices. He's a true leader who inspires, coaches, and motivates. I consider myself fortunate to have the opportunity to work with and learn from him.",
  },
  {
    name:  "Justin Botimer",
    title: "Program Manager @ Greenpath Financial Wellness",
    quote: "One of Chin-May's (many) strengths is that he can help you look at problem solving in different ways. He was usually able to see a path forward that no one else did...Chin-May helped me get \"unstuck\" more times than I can remember.",
  },
];

// ─────────────────────────────────────────────
// FOCUS AREAS
// ─────────────────────────────────────────────
export const FOCUS_AREAS = [
  "Research + Data",
  "Behavioral Science",
  "UX & Product Strategy",
];

// ─────────────────────────────────────────────
// AWARDS
// ─────────────────────────────────────────────
export const AWARDS = [
  {
    title: "Campus Leader of the Year",
    year:  "2014",
    org:   "American Psychological Association",
  },
  {
    title: "Excellence in Campus Leadership",
    year:  "2013",
    org:   "American Psychological Association",
  },
  {
    title: "Travel and Research Award",
    year:  "2012",
    org:   "Dept. of Psychology, Oakland University",
  },
  {
    title: "Recognition of Significant Academic Accomplishments at the Graduate Level",
    year:  "2011",
    org:   "Ball State University",
  },
];

// ─────────────────────────────────────────────
// TEACHING
// ─────────────────────────────────────────────
export const TEACHING = {
  mbaCourses: {
    institution: "SCMLD MBA Institute",
    period:      "Fall 2009, Winter 2010",
    courses: [
      {
        name:        "Decision Making, Motivation & Emotion",
        description: "Introduction to the human decision-making process, motivation & emotion in the context of business & management.",
      },
      {
        name:        "Consumer Behavior",
        description: "A convergence of psychology and economics, looking at human behavior in the marketplace.",
      },
    ],
  },
  psychologyCourses: {
    institution: "Oakland University",
    period:      "Winter 2015, Summer 2016 & Other",
    courses: [
      {
        name:        "Foundations of Contemporary Psychology",
        description: "This course provides an overview of topics in psychological science for undergraduates across various majors.",
      },
      {
        name:        "Basic Psychological Processes",
        period:      "Fall 2015, Winter 2016",
        description: "This course focuses on understanding the methods & results of empirical human behavioral research.",
      },
    ],
  },
  guestLectures: {
    institution: "BSU & OU",
    period:      "Fall 2011 to Spring 2014",
    topics: [
      "Motivation",
      "Mate Preferences across Cultures",
      "Social Cognition",
      "Measurement in Psychology",
      "Problem Solving",
      "Social Influences",
    ],
  },
};
