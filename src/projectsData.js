// big project images
import bImg_1 from './projects-images/01-YouTube-Clone-img-1.png';
import bImg_2 from './projects-images/02-portfolio-website.png';
import bImg_3 from './projects-images/03-Comfy-Store-app.png';
import { nanoid } from 'nanoid';
// small project images

export const bigProjectData = [

  // Project: 01;
  {
  id: nanoid(),
  category: 'HTML&&CSS',
  img: bImg_1,

  techUsed: 'HTML and CSS',

  desc: 'The YouTube Clone has been developed utilizing HTML5 and CSS3. The CSS-HTML methods applied in its construction include positioning, flexbox, grid layout, image manipulation, pseudo-selectors, semantic tags, tooltip techniques, media queries, and link integration.',

  url: 'https://keerti-kumar-shakya.github.io/YouTube-Clone/',

  github: 'https://github.com/Keerti-kumar-shakya/YouTube-Clone',

  projectName: 'social media youTube clone'

  },
    // Project: 02;
  {
    id: nanoid(),
    category: 'vanilla-Js',
    img: bImg_2,
    techUsed: 'CCS, HTML and JavaScript',

    desc: `I have developed a responsive portfolio website that provides a comprehensive overview of my education, skills, and professional experience. This project showcases my proficiency in web development using fundamental technologies such as HTML, CSS, and JavaScript.`,

    url: 'https://keerti-kumar-shakya.github.io/Personal-Portfolio-resume/',

    github: 'https://github.com/Keerti-kumar-shakya/big-vanilla-JavaScript-Project/tree/main/01%20-%20Personal%20Portfolio%20JS',

    projectName: 'portfolio'
  
  },

  // Project: 03;
  {
    id: nanoid(),
    category: 'react-redux',
    img: bImg_3,
    techUsed: 'React JS, Redux Toolkit, Tailwind CSS, Daisy UI Tailwind, React Query, React Router DOM, React Toastify, Axios, Day.js, and React Icons',

    desc: `The Comfy Store App is an advanced e-commerce web application designed to provide users with a seamless and enjoyable shopping experience. Utilizing a suite of modern web technologies, this project combines powerful functionality with a visually appealing and intuitive user interface. Key technologies used include React JS, Redux Toolkit, Tailwind CSS, Daisy UI Tailwind, React Query, React Router DOM, React Toastify, Axios, Day.js, and React Icons.
     
    Key Features :-
     User Authentication, Product Catalog, Shopping Cart,Checkout Process, Responsive Design, Real-Time Data Updates,User Notifications, Elegant UI.
    `
    ,
    url: 'https://01-big-react-comfy-store-project.netlify.app/',

    github: 'https://github.com/Keerti-kumar-shakya/big-react-redux-projects/tree/main/01-%20comfy%20store%20app',

    projectName: 'comfy store app'
  
  },

]


