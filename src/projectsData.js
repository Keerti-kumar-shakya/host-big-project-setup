// big project images
import bImg_1 from './projects-images/01-YouTube-Clone-img-1.png';
import bImg_2 from './projects-images/02-Comfy-Store-app.png';
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
    category: 'react-redux',
    img: bImg_2,
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


