import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Reisson Saavedra',
  lang: 'en',
  description: 'Welcome...',
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Reisson Saavedra',
  subtitle: 'I am Data Scientist / Data Engineer',
  cta: 'MY RESUME',
};

// ABOUT DATA
export const aboutData = {
  img: 'pp.jpeg',
  paragraphOne:
    'I hold a Bsc degree from Universidad Nacional de Trujillo. I am specialized in Big Data and Machine Learning applied to financial markets and healthcare.',
  paragraphTwo:
    'Winner of MIT Hackathon Hack4TheFuture 2020 with the project Anmol Saathi(a platform for decentralized access to basic healthcare services to people resident in rural areas).\nActivately I participate as a volunteer in DSRP (mentoring professionals starting in data science and IA) and PathCheck Foundation(ML Engineer and Data Engineer)',
  paragraphThree:
    'Currently, I am researching topics like Portfolio Optimization using Deep-RL and use of AI to minimize the impact of climate change',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'PORTFOLIO OPTIMIZATION USING DEEP Q-VALUE',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'COVID-19 ANALYSIS IN USA',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'PERU ELECTIONS 2021',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'reisson.saavedra.miguel@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/SaavedraReisson',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/reisson-saavedra/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/reissaavedra',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
