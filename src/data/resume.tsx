import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Mahdi Jalili',
  initials: 'MJ',
  url: 'https://www.linkedin.com/in/mahdi-jalili',
  location: 'Tehran, IR',
  locationLink: 'https://www.google.com/maps/place/Tehran,+Iran',
  description:
    'A Software Engineer and Front-End Developer with a passion for building startups and turning ideas into impactful products. I enjoy diving into AI and mentoring future tech enthusiasts.',
  summary:
    'Hi there! I’m Mahdi, a Front-End Developer and Software Engineer. My journey includes building innovative platforms like Tarhvar, a merchandise platform for artists, and contributing to AIsion, an AI-powered image generation platform. I love blending creativity with technology and have honed my skills in React, Next.js, AntDesign, and Material UI. Alongside these, I’ve earned accolades in international robotics and enjoy mentoring and exploring AI and Machine Learning.',
  avatarUrl: '/me.jpg',
  skills: [
    'TypeScript',
    'JavaScript',
    'React.js',
    'Next.js',
    'Server-Side Rendering (SSR)',
    'Server-Side Rendering (SSG)',
    'PWA',
    'React Native',
    'Expo',
    'Node.js',
    'Express.js',
    'Bun',
    'Elysia.js',
    'Python',
    'AntDesign',
    'Material UI',
    'CSS3',
    'Bootstrap 4',
    'Tailwind CSS',
    'React Query',
    'Formik',
    'Yup',
    'Mechatronics',
    'Robotics',
    'Image Processing',
    'Computer Vision',
    'AI',
    'Machine Learning',
    'Deep Learning',
    'Git',
    'GitHub',
    'GitLab',
    'Docker',
    'CI/CD',
    'SEO Optimization'
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' }
  ],
  contact: {
    email: 'me@mahdi.im',
    tel: '+98 933 967 67 54',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/mahdjalili',
        icon: Icons.github,
        navbar: true
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mahdi-jalili',
        icon: Icons.linkedin,
        navbar: true
      },
      X: {
        name: 'X',
        url: 'https://x.com/mahdjalili',
        icon: Icons.x,
        navbar: true
      },
      Youtube: {
        name: 'Youtube',
        url: 'https://www.youtube.com/@mahdjalili',
        icon: Icons.youtube,
        navbar: false
      },
      Bluesky: {
        name: 'Bluesky',
        url: 'https://bsky.app/profile/mahdi.im',
        icon: Icons.bluesky,
        navbar: true
      },
      Email: {
        name: 'Send Email',
        url: 'mailto:me@mahdi.im',
        icon: Icons.email,
        navbar: true
      }
    }
  },

  work: [
    {
      company: 'Tapsell',
      href: 'https://tapsell.ir',
      badges: [],
      location: 'Tehran, Iran',
      title: 'Front-End Developer',
      logoUrl: '/tapsell.jpeg',
      start: 'January 2024',
      end: 'Present',
      description:
        'Developing and maintaining scalable front-end solutions to enhance user engagement and provide seamless experiences across Tapsell’s advertising platforms.'
    },
    {
      company: 'Siliconamma | سیلیکون امّا',
      href: 'https://siliconamma.ir',
      badges: [],
      location: 'Tehran, Iran',
      title: 'Podcast Host',
      logoUrl: '/siliconamma.jpeg',
      start: 'March 2021',
      end: 'Present',
      description:
        'Hosting and producing insightful podcasts discussing cutting-edge tech trends and their impact, fostering a growing tech-savvy community.'
    },
    {
      company: 'Pixy',
      href: 'https://pixy.ir',
      badges: [],
      location: 'Tehran, Iran',
      title: 'Software Engineer',
      logoUrl: '/pixy.png',
      start: 'January 2024',
      end: 'April 2025',
      description:
        'Leading development of a comprehensive AI platform that provides unified access to advanced AI models in Persian. ' +
        'Implementing key features including AI-powered video subtitling, text-to-video conversion, image generation, ' +
        'and multilingual chatbot capabilities. Developed a robust file management system and ensured seamless multilingual ' +
        'support across all platform features, making AI tools accessible to Persian-speaking users.'
    },
    {
      company: 'AIsion',
      href: 'https://aision.io',
      badges: [],
      location: 'Tehran, Iran',
      title: 'Innovative Front-End Developer & PWA Architect',
      logoUrl: '/aision.jpeg',
      start: 'August 2023',
      end: 'March 2024',
      description:
        'Designed and implemented solutions for an AI-powered image generation platform supporting multilingual audiences. Developed unified source code for efficient updates and optimized low-code/no-code projects for diverse user needs.'
    },
    {
      company: 'LinkShim',
      href: '#',
      badges: [],
      location: 'Hamedan, Iran',
      title: 'Member of the Management Board & Board Director',
      logoUrl: '/linkshim.jpeg',
      start: 'August 2023',
      end: 'March 2024',
      description:
        'Led a student-driven team to create a collaborative platform for students and entrepreneurs. Organized community events and contributed to key decisions improving the platform’s user experience.'
    },
    {
      company: 'Awdge Pazhoohesh Sanaat (APS) Consulting Engineers',
      href: 'https://aps.ir',
      badges: [],
      location: 'Tehran, Iran',
      title: 'Software Engineer Consultant & CMS Strategist',
      logoUrl: '/aps.png',
      start: 'March 2023',
      end: 'February 2024',
      description:
        'Developed custom CMS solutions and internal content systems for clients. Improved system uptime and visibility through SEO strategies and reliable email management.'
    },
    {
      company: 'Tarhvar',
      href: 'https://tarhvar.com',
      badges: [],
      location: 'Tehran, Iran',
      title: 'Startup Trailblazer, Stakeholder & Frontend Developer',
      logoUrl: '/tarhvar.jpeg',
      start: 'December 2020',
      end: 'May 2023',
      description:
        'Built a scalable merchandise platform for artists to monetize designs. Implemented SSR with Next.js, optimized performance, and solved usability challenges with innovative front-end solutions.'
    },
    {
      company: 'Barnam',
      href: '#',
      badges: [],
      location: 'Tehran, Iran',
      title: 'Freelance Frontend Developer',
      logoUrl: '/barnam.jpg',
      start: 'September 2020',
      end: 'December 2020',
      description:
        'Developed a responsive front-end for an educational platform using Bootstrap and CSS3. Collaborated with a local high school to connect students with teachers and counselors.'
    }
  ],
  education: [
    {
      school: 'Hamedan University of Technology',
      href: 'https://hut.ac.ir',
      degree: 'Bachelor of Engineering - BE in Computer Engineering',
      logoUrl: '/hut.jpeg',
      start: '2020',
      end: 'Present'
    },
    {
      school: 'Technorobiran',
      href: 'https://technorobiran.com',
      degree: 'Mechatronics, Robotics, and Automation Engineering',
      logoUrl: '/technorobiran.png',
      start: '2014',
      end: '2019'
    }
  ],
  projects: [
    {
      title: 'Tarhvar Merchandise Platform',
      href: 'https://tarhvar.com',
      dates: 'December 2020 - May 2023',
      active: false,
      description:
        'Launched a platform that empowered artists to monetize their designs by turning them into merchandise. Solved performance bottlenecks with SSR in Next.js and created a seamless, responsive user interface.',
      technologies: [
        'Next.js',
        'React',
        'Styled Components',
        'Material UI',
        'Node.js',
        'PostgreSQL'
      ],
      links: [
        {
          type: 'Website',
          href: 'https://tarhvar.com',
          icon: 'globe'
        }
      ],
      image: '',
      video: ''
    },
    {
      title: 'AIsion - AI Image Generation Platform',
      href: 'https://aision.com',
      dates: 'August 2023 - March 2024',
      active: true,
      description:
        'Built a multilingual AI-powered image generation platform tailored for industries such as marketing and design. Implemented advanced PWA features for seamless performance across devices.',
      technologies: [
        'React',
        'PWA',
        'TypeScript',
        'Node.js',
        'Responsive Design'
      ],
      links: [],
      image: '',
      video: ''
    },
    {
      title: 'Content Management System for APS',
      href: 'https://aps.com',
      dates: 'March 2023 - February 2024',
      active: true,
      description:
        'Developed a custom CMS that streamlined content production and enhanced SEO visibility. Focused on intuitive usability and improved operational uptime for clients.',
      technologies: ['Node.js', 'React', 'SEO Optimization', 'PostgreSQL'],
      links: [],
      image: '',
      video: ''
    },
    {
      title: 'Educational Platform for Barnam',
      href: '',
      dates: 'September 2020 - December 2020',
      active: false,
      description:
        'Developed a digital platform connecting students with teachers and counselors. Built a fully responsive front-end using Bootstrap 4 and CSS3.',
      technologies: ['Bootstrap 4', 'CSS3', 'JavaScript'],
      links: [],
      image: '',
      video: ''
    }
  ],
  hackathons: []
  // hackathons: [
  //   {
  //     title: 'Hack Western 5',
  //     dates: 'November 23rd - 25th, 2018',
  //     location: 'London, Ontario',
  //     description:
  //       'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
  //     links: []
  //   },
  //   {
  //     title: 'Hack The North',
  //     dates: 'September 14th - 16th, 2018',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed a mobile application which delivers university campus wide events in real time to all students.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
  //     links: []
  //   },
  //   {
  //     title: 'FirstNet Public Safety Hackathon',
  //     dates: 'March 23rd - 24th, 2018',
  //     location: 'San Francisco, California',
  //     description:
  //       'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
  //     icon: 'public',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
  //     links: []
  //   },
  //   {
  //     title: 'DeveloperWeek Hackathon',
  //     dates: 'February 3rd - 4th, 2018',
  //     location: 'San Francisco, California',
  //     description:
  //       'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
  //     links: [
  //       {
  //         title: 'Github',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/cryptotrends/cryptotrends'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'HackDavis',
  //     dates: 'January 20th - 21st, 2018',
  //     location: 'Davis, California',
  //     description:
  //       'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
  //     win: 'Best Data Hack',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
  //     links: [
  //       {
  //         title: 'Devpost',
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: 'https://devpost.com/software/my6footprint'
  //       },
  //       {
  //         title: 'ML',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/Wallet6/my6footprint-machine-learning'
  //       },
  //       {
  //         title: 'iOS',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/Wallet6/CarbonWallet'
  //       },
  //       {
  //         title: 'Server',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/Wallet6/wallet6-server'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'ETH Waterloo',
  //     dates: 'October 13th - 15th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png',
  //     links: [
  //       {
  //         title: 'Organization',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/ethdocnet'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Hack The North',
  //     dates: 'September 15th - 17th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed a virtual reality application allowing users to see themselves in third person.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Streamer Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/justinmichaud/htn2017'
  //       },
  //       {
  //         title: 'Client Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/dillionverma/RTSPClient'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Hack The 6ix',
  //     dates: 'August 26th - 27th, 2017',
  //     location: 'Toronto, Ontario',
  //     description:
  //       'Developed an open platform for people shipping items to same place to combine shipping costs and save money.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/ShareShip/ShareShip'
  //       },
  //       {
  //         title: 'Site',
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: 'https://share-ship.herokuapp.com/'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Stupid Hack Toronto',
  //     dates: 'July 23rd, 2017',
  //     location: 'Toronto, Ontario',
  //     description:
  //       'Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/nsagirlfriend/nsagirlfriend'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Global AI Hackathon - Toronto',
  //     dates: 'June 23rd - 25th, 2017',
  //     location: 'Toronto, Ontario',
  //     description:
  //       'Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg',
  //     win: '1st Place Winner',
  //     links: [
  //       {
  //         title: 'Article',
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: 'https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/'
  //       },
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/TinySamosas/'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'McGill AI for Social Innovation Hackathon',
  //     dates: 'June 17th - 18th, 2017',
  //     location: 'Montreal, Quebec',
  //     description:
  //       'Developed realtime facial microexpression analyzer using AI',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg',
  //     links: []
  //   },
  //   {
  //     title: 'Open Source Circular Economy Days Hackathon',
  //     dates: 'June 10th, 2017',
  //     location: 'Toronto, Ontario',
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg',
  //     win: '1st Place Winner',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/dillionverma/genecis'
  //       }
  //     ]
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: 'May 19th - 21st, 2017',
  //     location: 'International',
  //     description: 'Improved PocketDoc and submitted to online competition',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
  //     win: 'Top 10 Finalist | Honourable Mention',
  //     links: [
  //       {
  //         title: 'Medium Article',
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a'
  //       },
  //       {
  //         title: 'Devpost',
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: 'https://devpost.com/software/pocketdoc-react-native'
  //       },
  //       {
  //         title: 'YouTube',
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68'
  //       },
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/dillionverma/pocketdoc-react-native'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'HackMining',
  //     dates: 'May 12th - 14th, 2017',
  //     location: 'Toronto, Ontario',
  //     description: 'Developed neural network to optimize a mining process',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png',
  //     links: []
  //   },
  //   {
  //     title: 'Waterloo Equithon',
  //     dates: 'May 5th - 7th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png',
  //     links: [
  //       {
  //         title: 'Devpost',
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: 'https://devpost.com/software/pocketdoc-react-native'
  //       },
  //       {
  //         title: 'YouTube',
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68'
  //       },
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/dillionverma/pocketdoc-react-native'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'SpaceApps Waterloo',
  //     dates: 'April 28th - 30th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/dillionverma/earthwatch'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'MHacks 9',
  //     dates: 'March 24th - 26th, 2017',
  //     location: 'Ann Arbor, Michigan',
  //     description:
  //       'Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/dillionverma/threejs-planes'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'StartHacks I',
  //     dates: 'March 4th - 5th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png',
  //     win: '1st Place Winner',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Source (Mobile)',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/mattBlackDesign/recipic-ionic'
  //       },
  //       {
  //         title: 'Source (Server)',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/mattBlackDesign/recipic-rails'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'QHacks II',
  //     dates: 'February 3rd - 5th, 2017',
  //     location: 'Kingston, Ontario',
  //     description:
  //       'Developed a mobile game which enables city-wide manhunt with random lobbies',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Source (Mobile)',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/dillionverma/human-huntr-react-native'
  //       },
  //       {
  //         title: 'Source (API)',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/mattBlackDesign/human-huntr-rails'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Terrible Hacks V',
  //     dates: 'November 26th, 2016',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed a mock of Windows 11 with interesting notifications and functionality',
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/justinmichaud/TerribleHacks2016-Windows11'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'Portal Hackathon',
  //     dates: 'October 29, 2016',
  //     location: 'Kingston, Ontario',
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/UWPortalSDK/crowmark'
  //       }
  //     ]
  //   }
  // ]
} as const;
