import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../components/CaseStudy.css';

const caseStudies = {
  'yonder-ai': {
    title: 'Yonder AI App',
    subtitle: 'Social Media Intelligence for Brands',
    heroImage: 'https://static.wixstatic.com/media/a0fcc9_2b4c351e5aa64645afd7604649181635~mv2.png',
    role: 'Design Lead',
    team: 'CTO, CEO, 2 Sr Product Engineers, Director of Data Science, ML Engineers',
    overview: 'Yonder AI (acq. by Primer AI) was a Series A startup focused on providing brands with relevant social media insights using Natural Language Programming.',
    fullWidth: true,
    standaloneTexts: [
      {
        heading: 'The Challenge',
        text: 'Building a Zero to One product in a fast-paced world of social media and AI. Our clients were big brands like McDonalds, The Home Depot, Walmart, and Disney, to name a few. Current client needs were crucial for revenue at a small company. Product updates had to be shipped quickly and in a way that clients would appreciate.',
      },
      {
        heading: 'My Work',
        text: 'As the only designer on the team, I had a lot of sense-making responsibilities — understanding the ML-generated info, compressing it into easily understandable insight, visualizing that insight and designing product features, and working with Engineering around technical constraints.',
      },
    ],
    rows: [
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_f7dfbaa5b3cb42829176cdc5ff9b630d~mv2.png', alt: 'Conceptual wireframe overview' },
        heading: '',
        text: '',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_63b53d4f765c44289a8c8933f835a7b5~mv2.jpg', alt: 'Daily Digest - Should I care tab' },
        heading: 'Daily Digest',
        text: 'A default landing page giving brands a snapshot of the overall social narratives around a topic they are tracking. I narrowed down much of the info we were generating into 4 basic questions based on user interviews.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_dffc37d45a4543eea266db02f38b2819~mv2.jpg', alt: 'Factions tab' },
        heading: 'Narrative Analysis',
        text: 'How each narrative was performing over time. It also contained sub-page tabs like: Narrative Overview, Factions, and Authenticity.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_fa6302a9e5c84b51887b693aff38a646~mv2.png', alt: 'Authenticity tab' },
        heading: 'Factions View',
        text: 'Understanding which groups are driving specific narratives with graph visualizations. User feedback told us the previous insights were too text-heavy and difficult to interpret actionably for our audience.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_0fb6e98d6c034710ab3e4d17a298e4a3~mv2.png', alt: 'Factions analysis page' },
        heading: 'Factions Deep Dive',
        text: 'I worked on capturing the essential insights in a conceptual wireframe. The goal was to make complex faction data visually digestible for marketing, brand, and communication analysts at top brands.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_cd477c8357ac47f69bcf3e8c3e20cb8f~mv2.png', alt: 'Curation page' },
        heading: 'Curation Tools',
        text: 'The Curation page (or Convos) is where curated conversations and insights were generated.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_5731503a172947329d89f7b55705bd98~mv2.png', alt: 'Edit Conversation UI' },
        heading: 'Edit Conversation',
        text: 'Tools for editing and managing curated conversations.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_1babcb0c034b4aa7b0aea88ef975b2ad~mv2.gif', alt: 'Filters interaction' },
        heading: 'Filters',
        text: 'The Filters allowed users to narrow down the specific narratives that they were looking for inside a curated report.',
      },
    ],
    closingTexts: [
      {
        heading: 'Reflection',
        text: 'Today I would change a lot of things about the way I designed the product. Mainly around UI consistency, iconography, etc. We had to make several compromises due to the speed needs of the project.',
      },
      {
        heading: 'Design Board Overview',
        text: 'Over 8 months we built a 25+ page product experience with considerable backend lift, NLP and data science. Overall creating Yonder AI was an amazing 0-1 startup experience. To see a business built from nothing is one of my favorite things to experience.',
      },
    ],
    closingImages: [
      { src: 'https://static.wixstatic.com/media/a0fcc9_5baa4cf1650a4f06a8a3562d96026047~mv2.png', alt: 'Design board slide 1' },
      { src: 'https://static.wixstatic.com/media/a0fcc9_65ef7bd6b45f41b985fbf698b6da8e98~mv2.png', alt: 'Design board slide 2' },
    ],
  },
  'right-reach': {
    title: 'Right Reach',
    subtitle: 'Online Financial Assessment App by Greenpath Financial Wellness',
    heroImage: 'https://static.wixstatic.com/media/a0fcc9_e8b3630664fc47f99466a8055858d52b~mv2.png',
    role: 'Director of Product Design',
    team: 'Jr UX Designer, Sr UX Designer, UX Researcher, Sr Business Analyst, Principal Developer',
    overview: 'Greenpath is one of the biggest financial wellness companies in the US. For 60+ years GreenPath has helped people lead healthier financial lives.',
    fullWidth: true,
    standaloneTexts: [
      {
        heading: 'Creating the Highest Converting Channel in Company History',
        text: 'It takes 30+ mins of phone conversation to determine if GreenPath can help a caller with their financial situation. Obviously, this is extremely tiresome for the callers, makes a bad first impression for GreenPath and leads to a ton of overhead cost. After identifying this issue I lead the team that went on to conceive of, and implement the solution. The goal was to create an online, automated way of identifying the right client fit — hence the project was called Right Reach.',
      },
    ],
    rows: [
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_147edca113c74176a57aefcd8e415a40~mv2.png', alt: 'Team values and feedback' },
        heading: 'Team Values and Feedback',
        text: 'We started by understanding our own values and the feedback we\'ve got from clients about their goals. After leading a couple of design thinking sessions, I was fairly confident we had landed on a solid base of concepts to jump off of.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_8666ed4df2d246dabe669c25c0c23de9~mv2.png', alt: 'Competitor analysis chart' },
        heading: 'Competitors Had a Variety of Intake Features',
        text: 'Next on the agenda was a thorough competitor analysis to see what others in this space were doing to reach their audience online. My researcher and I planned this out. We looked at 6 companies, some direct competitors in the financial wellness space, and others in aligned space who were on top of their game in reaching their audience. We gathered insights from looking at their online products and noted areas of overlap and unique/interesting ideas we found.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_e57ada1c1e60484a9dd2451b4562265f~mv2.png', alt: 'Roadmap and strategy' },
        heading: 'Presented a Roadmap & Strategic Alignment to C-team',
        text: 'After a good look inside and out, I was able to present a cohesive strategy to the C-suite for how we would build this app in stages, and how this app would fit into the overall ecosystem of products at GreenPath. This was seen as "transformational" and "revolutionary" by the C-team, which made me really happy and eager to get started.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_3d48aed34528429097b837ea7b1a351f~mv2.png', alt: 'Strategic pyramid' },
        heading: 'Vision and Execution',
        text: 'With a little effort, we were able to put the team together, complete a few pending hires, and get started on showing everyone at GreenPath what we\'d be working on for the next few months.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_d4b55ab01ccd4bfdb73f7f260a6c4f90~mv2.png', alt: 'Low-fi wireframes' },
        heading: 'Show Some Basic Concepts to Choose From',
        text: 'After a few more design thinking exercises, we presented the first round of low-fi wireframes to the team for feedback. We highlighted the different approaches taken by different layouts and elements. Feedback suggested we mix and match some of the elements from the wire sets.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_ffcfbd00d1084fb49791ee3aadc922df~mv2.png', alt: 'Mid-fidelity wireframes' },
        heading: 'Mid-Fidelity Wireframes',
        text: 'After solidifying low-fi wires and the layout of basic elements we added color, shapes, and other elements to provide more brand and feel to the wires. This gave the team another chance to see the work in progress and provide any additional feedback. In this project, we had 22 stakeholders, so it was important to get constant feedback to keep alignment.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_4517683e490049a5969291fd1bf9b25c~mv2.png', alt: 'Style guide' },
        heading: 'Styleguide',
        text: 'As we continued to make progress toward a high-fidelity prototype, we simultaneously created a style guide / mini-design system to help get the front team started on creating basic elements while finalizing the designs.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_b770175423064f659ecf044c0b9bf23e~mv2.png', alt: 'Mobile first mockup' },
        heading: 'Mobile First',
        text: 'With a large percentage of traffic coming from mobile we lead with a mobile-first approach to the app design. With clickable prototypes for both mobile and desktop, we were able to test real users interacting with the prototype and gather valuable feedback about the usability and design of the app.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_8364ce6f5f6146b1b761661fe1c14a0e~mv2.png', alt: 'User research findings' },
        heading: 'Research-Based Design',
        text: 'We presented all the findings from the user interviews to the team to keep them in the loop. The team felt involved and connected to the product.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_d5f50b34c65a4c149937e0d235b483d8~mv2.png', alt: 'Desktop and mobile cohesive design' },
        heading: 'Cohesive Experience Across Mobile & Web',
        text: 'Based on competitive research, design thinking, several user interviews, and team feedback, we finally had a high-fidelity interactive prototype to deliver to the engineering team, as well as to demo for potential partners (B2B lob). It was important that the app felt cohesive on mobile and desktop and the trust factor for financial services is extremely high, in addition to the vulnerable state our clients are often in.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_4767d1140ba84a0eb933c8d9804214a0~mv2.png', alt: 'Strategy to execution' },
        heading: 'Strategy to Execution',
        text: 'My favorite part of the project was the strategic fit of this app into the ecosystem for GreenPath. This accelerated our digital transition and aligned several different teams on a unified vision for the future.',
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_e778de85fb38421b9130d4c2c346a1d9~mv2.png', alt: 'Design process diagram' },
        heading: 'Design Process',
        text: 'This is a diagram of the standard digital design process my team followed at GreenPath. I felt it was important that all the team felt they were aligned on the expectations. This process was based on co-working sessions with engineering, project management, C-team as well as several other teams involved in this project.',
      },
    ],
    closingTexts: [
      {
        heading: 'Results',
        text: 'In approximately 3 weeks — Visitors: 4,227 · Leads: 1,452 · Sessions: 112 · Accounts generated: 21+ · Conversion: >20% · Value Created: $315,000 in 3 weeks (Avg. value per client was $15,000).',
      },
    ],
    closingImages: [
      { src: 'https://static.wixstatic.com/media/a0fcc9_1e3cd1fd294945f8879ad6bdcd11f110~mv2.png', alt: 'Results dashboard' },
      { src: 'https://static.wixstatic.com/media/a0fcc9_66f442cf633946a8a022a7d992db2c70~mv2.png', alt: 'Final app mockup' },
    ],
  },
  'dte-insight': {
    title: 'DTE Insight App',
    subtitle: 'Energy Management App for Behavioral Savings',
    heroImage: 'https://static.wixstatic.com/media/a0fcc9_49c6223098b8453a9970025226668027~mv2.png',
    role: 'Lead UX Designer (Design + Research)',
    team: '1 UI Icon / Motion Designer, 1 Project manager, 1 Design Director, + Several Hardware & Software engineers.',
    overview: 'DTE is one of Michigan\'s largest utility companies. I worked on the team that built an energy management app targeting energy savings behavior change for household clients.',
    fullWidth: true,
    standaloneTexts: [
      {
        heading: 'Overview of the Challenge',
        text: [
          'DTE Energy gets government incentives to reduce energy consumption but this gets tougher over time without new technology. DTE came to Vectorform to investigate ways latest technology can achieve this.',
          'After looking at various options, DTE liked the idea of using behavioral-technology to reduce consumption. We\'d pointed out that studies had pointed out for several years that decreasing the feedback interval improves savings in small samples, but no such technology had really hit the market yet.',
          'Spurred on by this idea supported by strong academic & some applied research, we set on the journey that could potentially begin in a new chapter for both companies.',
        ],
      },
    ],
    rows: [
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_9f9aecfa9c4e498b85e4a484062acc0d~mv2.png', alt: 'Targeting household consumption' },
        heading: 'Targeting Household Consumption',
        text: [
          'We found that decades ago researchers had pointed to an opportunity to improve household energy consumption habits by adopting better behaviors.',
          'This remained an underexplored solution as most engineers focused on technological factors rather than human behavioral factors.',
          'For example, in 1999, Brandon & Lewis point out the 5 key areas that influence household energy consumption. The two key factors included behavioral change & feedback, which were potentially related.',
          'Brandon, G., & Lewis, A. (1999). Reducing household energy consumption: a qualitative and quantitative field study. Journal of environmental Psychology, 19(1), 75-85.',
        ],
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_87e90e1c59f44f7081fb356953bcd4cb~mv2.png', alt: 'Feedback research chart' },
        heading: 'Making Energy Visible',
        text: [
          'One study in 2012 had found mixed results on providing detailed real-time feedback on energy consumption. But this was an extremely small sample of 11 households in The UK and the results were mainly qualitative.',
          'We were encouraged by these studies because it showed that others had also sensed there was a market for this.',
          'Hargreaves, T., Nye, M., & Burgess, J. (2013). Keeping energy visible? Exploring how householders interact with feedback from smart energy monitors in the longer term. Energy policy, 52, 126-134.',
        ],
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_96e03d633e254c648eadf31f4bcd46fe~mv2.png', alt: 'Energy feedback visualization concepts' },
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_1cb4d1f1544b4e33b7c918ffd46aee83~mv2.jpg', alt: 'Behind the scenes planning' },
        heading: 'Behind the Scenes',
        text: [
          'With the knowledge of previous research, two strong teams from DTE & Vectorform, we began the formative stages of the project.',
          'The following weeks involved a ton of meetings with DTE to get to know their current team, POV, some background data, regulatory limitations, previous attempts, etc.',
          'On the VF side our hardware team was reviewing available technology to see what could work, cost estimates etc.',
          'My team - we planned user research. After talking with DTE team, going into people\'s homes to understand the context-of-use of this kind of an idea made sense.',
        ],
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_a8ee8a7c660449ad9a6baefa57625cbf~mv2.png', alt: 'User research in homes' },
        heading: 'User Research',
        text: [
          'We visited 23 households in Michigan to study the habits, expectations, and behavior patterns of potential clients. Each visit lasted a few hours, which consisted of Q&A as well as learning about their lifestyles. The group was selected based on DTE\'s target client pool.',
          'We learned a ton through this field research. For example, we learnt that people ignore the \'invisible\' energy consumption via HVAC units and washing machines, and focus more on visible lighting etc. when it comes to intentionally saving energy.',
        ],
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_919eaea3677e479fab237e3f9dd3e6c2~mv2.png', alt: 'Hardware innovation' },
        heading: 'Hardware Innovation',
        text: [
          'Along with the app and the idea itself, there was another crucial piece of the puzzle - hardware.',
          'Our hardware team was able to research & patent the technology that would allow for real-time energy consumption monitoring, which would send the data to the app.',
          'This was a huge win and made the team that much more confident that the idea could come to fruition.',
        ],
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_5abdde1b9781464a9fc828c0a372f47a~mv2_d_1400_2879_s_2.jpg', alt: 'Dial visualization prototype' },
        heading: 'Ideate > Design > Test > Repeat',
        text: [
          'Based on the rich set of insights derived from field research as well as DTE\'s experienced customer service teams, we decided to start prototyping some ideas.',
          'One of the key challenges was designing a visualization that clearly communicates daily energy consumption activity.',
          'Initial user interviews showed that people associated bar & line charts with weekly & monthly consumption. After a lot of trial & error, we selected the dial as the visualization. It resembled a clock, which seemed to intuitively make sense to the users.',
        ],
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_92466f32d99a4a908bd3bfd2e1d0ff41~mv2.jpg', alt: 'Setting targets prototype screen' },
        heading: 'Setting Targets',
        text: [
          'Another key feature of the potential app was setting targets for consumption so that users can know how close / far they are from reaching their goal. This was based on DTE\'s previous programs which had received positive feedback but were at a monthly level w/ little control over daily activities.',
          'Real-time tracking of energy consumption allowed for a much more realistic picture of household consumption, and consequently a more powerful way to control activities.',
          'We followed the same process of prototypes & freeform feedback from users to get a sense of what users expected.',
        ],
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_31efbf8bd9554930be9b695bf60f2e25~mv2.jpg', alt: 'Additional target-setting screens' },
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_b20227af421e4b13a89b87cbf9e478b2~mv2.jpg', alt: 'Usability testing session' },
        heading: 'Testing Testing Testing',
        text: [
          'I believe there is no substitute for testing. Even though we had extremely talented designers and SMEs, we conducted in-depth real-life testing of the prototype for all the designs, which provided crucial info about the desirability of the app, and some of the next features we\'d have to build.',
          'We tested each and every page and key feature of the app before launch. We used cognitive walkthroughs and think-aloud protocol to have customers interact with the app and understand how they were processing the information during onboarding and on each of the pages.',
          'Interacting with the app as a whole presented more insights into app usage and customer pain points like the app being too data-heavy for some segments at this point.',
        ],
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_ba95957c66bf43cc9bc1b625624b1e4a~mv2.jpg', alt: 'Testing session insights' },
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_816b5e8908714428a9e644cc570d7fd9~mv2.jpg', alt: 'Testing artifacts' },
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_d1efecd37cda4010af55fdacc9d87b27~mv2.png', alt: 'App iterations with new features' },
        heading: 'Iterations',
        text: [
          'After the launch of the app, we continued to get feedback from DTE customers around improving detailed info in the app.',
          'Based on survey data & interview feedback we improved several aspects of the info such as Energy Spike Identification, Neighborhood Comparison, Last Week\'s Results Review, New Challenges, etc.',
          'We tracked the usage for each of the new features to insure usability & utility.',
        ],
      },
      {
        textOnly: true,
        heading: 'Goals & Rewards',
        text: [
          'Based on the data-heaviness of the initial app felt by some customers, in the next phase we focused on more gamification aspects of the app. We added goals & rewards at key moments & regular intervals to make the interaction with the app more engaging and fun, rather than just a data dump of numbers.',
          'We tracked the results post-gamification and the team was excited to find that those features had in fact increased monthly app usage frequency, session duration, and overall engagement metrics from the non-techy segment of the customer pool.',
        ],
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_35e0331991a249cc91f14ff0d7f4b9e7~mv2.png', alt: 'Design system — color palette' },
        heading: 'Design System',
        text: [
          'Based on the app needs the design team had created a solid design system as a guideline going forward. Bright and basic colors were selected to offer a broad range of options for data visualizations e.g. red for heat and light blue for cold aspects of energy consumption.',
          'We also chose a familiar and modern font Helvetica Neue to make the text readable throughout the app. And finally, an icon library was created to help symbolize key aspects of the app and make them memorable for the users.',
        ],
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_73c6e5b28760479397be7ece56badc7d~mv2.png', alt: 'Design system — typography' },
      },
      {
        image: { src: 'https://static.wixstatic.com/media/a0fcc9_b1580fbc029b40cfbc9e9f10f2122f90~mv2.png', alt: 'Design system — iconography' },
      },
    ],
    closingTexts: [
      {
        heading: 'The Results',
        text: [
          'To test the effectiveness of the DTE Insight app on household energy savings, a randomized controlled trial was conducted by an independent professional testing company commissioned by DTE & Michigan Govt.',
          '# of encouraged customers = 12,743\n# of treated customers = 7,379\n# of control customers = 4,639\nAvg # of months after installing = 6',
          'Based on energy data captured from 7,379 households over 17 months the results showed that DTE Insight led to the most significant savings in the history of DTE. The results are shown below.',
        ],
      },
    ],
    closingImages: [
      { src: 'https://static.wixstatic.com/media/a0fcc9_9f71ee98b389490baa115e8d99819745~mv2.png', alt: 'Results — trial summary' },
      { src: 'https://static.wixstatic.com/media/a0fcc9_72e9b454fe614b898bf1ea5bfc069200~mv2.png', alt: 'Results — energy savings data' },
      { src: 'https://static.wixstatic.com/media/a0fcc9_ee39293f0691400ea780c72c9dce2c3d~mv2.png', alt: 'Results — chart' },
    ],
  },
  'upwork-profile': {
    title: 'Upwork Profile Preview',
    subtitle: 'Rethinking Freelancer Presentation',
    heroImage: 'https://static.wixstatic.com/media/a0fcc9_1b1da8fd7a07459587247c0a6da0ad80~mv2.png',
    role: 'Product Designer',
    team: 'Product squad of 6',
    wip: true,
    overview: 'The Upwork Profile Preview project reimagined how freelancers present themselves to potential clients. The goal was to surface the most relevant information earlier in the browsing experience, helping clients make faster and more confident hiring decisions.',
    sections: [
      { type: 'text', heading: 'The Challenge', text: 'Clients on Upwork spent significant time clicking in and out of freelancer profiles to compare candidates. The existing profile preview showed limited information, forcing clients into a tedious back-and-forth flow that slowed down hiring decisions.' },
      { type: 'text', heading: 'My Role', text: 'I designed the expanded profile preview that surfaces key decision-making information \u2014 portfolio samples, success rate, skills, and availability \u2014 without requiring a full page navigation. The design balances information density with scannability.' },
      { type: 'text', heading: 'Design Approach', text: 'The redesigned preview uses a structured layout that prioritizes the information clients told us they value most: relevant work samples, earnings history, and skill endorsements. Progressive disclosure reveals deeper details on interaction.' },
    ],
  },
  'upwork-browse': {
    title: 'Upwork Browse Experience',
    subtitle: 'Improving Discovery for Clients',
    heroImage: 'https://static.wixstatic.com/media/a0fcc9_79d3c6babb62478491113759229886d4~mv2.png',
    role: 'Product Designer',
    team: 'Product squad of 6',
    wip: true,
    overview: 'The Browse Experience project focused on improving how clients discover and evaluate freelancers on Upwork. The redesign aimed to reduce the cognitive load of comparing multiple candidates and streamline the path from search to hire.',
    sections: [
      { type: 'text', heading: 'The Challenge', text: 'Clients reported that finding the right freelancer felt overwhelming. Search results returned hundreds of profiles with similar-looking cards, making meaningful comparison difficult. The browse experience needed to help clients narrow their options more efficiently.' },
      { type: 'text', heading: 'My Role', text: 'I designed the improved browse layout with better visual hierarchy, smarter filtering, and inline comparison tools. The design emphasizes differentiation between candidates and surfaces the signals that predict good matches.' },
      { type: 'text', heading: 'Design Approach', text: "The new browse experience uses responsive cards that adapt to show the most relevant information based on the client's search context. Mobile-first design ensures the experience works seamlessly across devices, with swipeable cards and sticky filters." },
    ],
  },
  'kroger-ai': {
    title: 'Kroger AI Insights',
    subtitle: 'First to Market AI Insights for CPGs',
    heroImage: '/kroger-hero.svg',
    role: 'Senior Product Designer',
    team: 'Product Manager, Data Science Lead, 3 Engineers',
    wip: true,
    overview: 'Kroger Technology & Digital partnered with CPG brands to deliver first-to-market AI-powered consumer insights. The platform leveraged Kroger\'s massive first-party purchase data to give brands real-time visibility into shopper behavior, category trends, and competitive dynamics — replacing weeks-long research cycles with on-demand intelligence.',
    sections: [
      { type: 'text', heading: 'The Challenge', text: 'CPG brands relied on syndicated data providers with 6-8 week lag times and limited granularity. Kroger had the richest first-party grocery purchase dataset in the country but no self-serve way for brand partners to access actionable insights from it. The opportunity was to create a differentiated data product that could become a new revenue stream.' },
      { type: 'text', heading: 'My Role', text: 'I led the end-to-end design of the insights platform — from early discovery research with CPG brand managers to high-fidelity prototypes tested with pilot partners. I worked closely with data science to translate complex ML outputs into visualizations that brand managers could act on without analyst support.' },
      { type: 'text', heading: 'Design Approach', text: 'The platform surfaces AI-generated insights through three lenses: Category Health (market share trends and competitive movement), Shopper Behavior (basket composition and purchase patterns), and Predictive Signals (early indicators of emerging trends). Each view was designed to answer the specific questions brand managers bring to weekly planning meetings.' },
    ],
  },
};

// Render one paragraph or an array of paragraphs. Accepts string | string[].
function renderParagraphs(text, className = 'cs-row-body') {
  if (text == null) return null;
  const arr = Array.isArray(text) ? text : [text];
  return arr.map((t, i) => (
    <p key={i} className={className}>{t}</p>
  ));
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
        <div key={i} className="cs-section">
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
          {section.ordered ? (
            <ol className="cs-list">
              {section.items.map((item, j) => <li key={j}>{item}</li>)}
            </ol>
          ) : (
            <ol className="cs-list">
              {section.items.map((item, j) => <li key={j}>{item}</li>)}
            </ol>
          )}
        </div>
      );
    default:
      return null;
  }
}

export default function CaseStudyPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const study = caseStudies[slug];
  const [showToast, setShowToast] = useState(false);
  const pageRef = useRef(null);

  const goToProjects = (e) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: 'projects' } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
    // Observe all animatable rows
    const timer = setTimeout(() => {
      document.querySelectorAll('.cs-row-animate').forEach((el) => observer.observe(el));
    }, 200);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [study?.fullWidth, slug]);

  if (!study) {
    return (
      <section className="case-study case-study--page">
        <div className="case-study-wrap">
          <Link to="/" className="back-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back</span>
          </Link>
          <h1 className="section-title">Case study not found</h1>
        </div>
      </section>
    );
  }

  // Full-width layout for Yonder AI
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

          <div className="case-study-header">
            <h1 className="section-title">{study.title}</h1>
            <p className="case-study-subtitle">{study.subtitle}</p>
          </div>

          {/* Cropped hero — only show the gradient fold, fade-in-down */}
          <div className="cs-hero-cropped">
            <img src={study.heroImage} alt={study.title} />
          </div>

          <div className="cs-fw-meta-row">
            <div className="case-study-meta-item">
              <span className="case-study-meta-label">Role</span>
              <span className="case-study-meta-value">{study.role}</span>
            </div>
            <div className="case-study-meta-item">
              <span className="case-study-meta-label">Team</span>
              <span className="case-study-meta-value">{study.team}</span>
            </div>
          </div>

          <div className="case-study-overview">
            <p>{study.overview}</p>
          </div>

          {/* Standalone intro text blocks */}
          {study.standaloneTexts && study.standaloneTexts.map((block, i) => (
            <div key={`st-${i}`} className="cs-standalone-text">
              <h3 className="cs-row-heading">{block.heading}</h3>
              {renderParagraphs(block.text)}
            </div>
          ))}

          {/* Alternating image-text rows with scroll animations */}
          <div className="cs-rows">
            {study.rows.map((row, i) => {
              if (row.textOnly) {
                return (
                  <div key={i} className="cs-standalone-text cs-row-animate cs-row-text-animated">
                    {row.heading && <h3 className="cs-row-heading">{row.heading}</h3>}
                    {renderParagraphs(row.text)}
                  </div>
                );
              }
              return (
                <div key={i} className={`cs-row cs-row-animate ${i % 2 === 0 ? 'cs-row--img-left' : 'cs-row--img-right'}`}>
                  <div className="cs-row-image cs-parallax">
                    <img src={row.image.src} alt={row.image.alt} loading="lazy" />
                  </div>
                  {(row.heading || row.text) ? (
                    <div className="cs-row-text cs-row-text-animated">
                      <div className="cs-row-connector" aria-hidden="true"></div>
                      {row.heading && <h3 className="cs-row-heading">{row.heading}</h3>}
                      {renderParagraphs(row.text)}
                    </div>
                  ) : (
                    <div className="cs-row-text"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Closing standalone text blocks */}
          {study.closingTexts && study.closingTexts.map((block, i) => (
            <div key={`ct-${i}`} className="cs-standalone-text">
              <h3 className="cs-row-heading">{block.heading}</h3>
              {renderParagraphs(block.text)}
            </div>
          ))}

          {/* Closing images with empty text */}
          {study.closingImages && (
            <div className="cs-rows">
              {study.closingImages.map((img, i) => (
                <div key={`ci-${i}`} className={`cs-row ${i % 2 === 0 ? 'cs-row--img-left' : 'cs-row--img-right'}`}>
                  <div className="cs-row-image">
                    <img src={img.src} alt={img.alt} loading="lazy" />
                  </div>
                  <div className="cs-row-text"></div>
                </div>
              ))}
            </div>
          )}

          <div className="case-study-bottom-nav">
            <a href="/#projects" onClick={goToProjects} className="back-link">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Back to Case Studies</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

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
          <h1 className="section-title">{study.title}</h1>
          <p className="case-study-subtitle">{study.subtitle}</p>
          {study.wip && <span className="case-study-wip-badge">Work in Progress</span>}
        </div>

        <div className="case-study-hero-image">
          <img src={study.heroImage} alt={study.title} />
        </div>

        <div className="case-study-meta">
          <div className="case-study-meta-item">
            <span className="case-study-meta-label">Role</span>
            <span className="case-study-meta-value">{study.role}</span>
          </div>
          <div className="case-study-meta-item">
            <span className="case-study-meta-label">Team</span>
            <span className="case-study-meta-value">{study.team}</span>
          </div>
        </div>

        <div className="case-study-overview">
          <p>{study.overview}</p>
        </div>

        <div className="case-study-content">
          {study.sections.map((section, i) => renderSection(section, i))}
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
    </section>
  );
}
