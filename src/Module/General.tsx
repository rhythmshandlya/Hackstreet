import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import polygon from './Assets/sponsorsLogos/polygon.png';
import solana from './Assets/sponsorsLogos/solana.png';
import filecoin from './Assets/sponsorsLogos/filecoin.png';
import Replit from './Assets/sponsorsLogos/replit.png';
import ppa from './Assets/sponsorsLogos/ppa.jpg';
import devfolio from './Assets/sponsorsLogos/devfolio.png';
import beeceptor from './Assets/sponsorsLogos/beeceptor.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

const TOP_SECTION = {
  TITLE: 'Hack Street',
  Typed_effect: ['48 hours of creativity', 'Code In The Abyssal'],
  SHORT_DESCRIPTION: '4th and 5th Feburary 2022',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK: '',
  HACKERS_REGISTRATION_FORM_LINK: ''
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/ieeesbjiit/',
  discord: 'https://discord.gg/Wv6bpzSSqJ',
  linkedin: 'https://www.linkedin.com/company/ieee-student-branch-jiit',
  email: 'mailto:ieeesbjiit@gmail.com',
  mail: 'ieeesbjiit@gmail.com'
};

const MIDDLE_SECTION = {
  TITLE: 'What is Hackstreet?',
  LONG_DESCRIPTION:
    'Hackstreet is 24 hour long running hackathon will be held on Feburary 4th and 5th , We calls for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers . Throughout the weekend hackers at Hackstreet will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending.',
  LOGO: hackathonLogo
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 1,
  year: 2022
};

const schedule = [{}];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'Winner',
      content:
        'Winner prize will be given to a project that outstands all other submissions'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: '1st Runner-up',
      content:
        '1st Runner-up prize will be given to the second best project of the hackathon'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: '2nd Runner-up',
      content:
        '2nd Runner-up project of the hackathon will win some awesome prizes'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'All Girls Team Winner',
      content:
        'All Girls Team Winner will be awarded to the project of hackathon which was made by an all girls team'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: devfolio}, {src: polygon}, {src: solana}], //Array 1
  [{src: filecoin}, {src: Replit}, {src: ppa}],
  [{src: beeceptor}]
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'Who can attend?',
        content: 'Hackstreet is open to students of all colleges'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.'
      },
      {
        label: 'How team formation works?',
        content:
          "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need is to fill our form above and join Discord, we will guide you through everything there'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly on our Discord Server we would happy to help you.'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  Prizeinfo,
  sponsorLogos,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
