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

User Authentication: Secure user authentication and authorization system, enabling users to create accounts, log in, and manage their profiles.

Product Catalog: Comprehensive product catalog with detailed product descriptions, images, and pricing, allowing users to browse and search for items easily.

Shopping Cart: Interactive shopping cart functionality, enabling users to add, remove, and update items, with real-time updates and total price calculations.

Checkout Process: Streamlined and secure checkout process, guiding users through order confirmation and payment steps.

Responsive Design: Ensured the application is fully responsive, providing an optimal viewing experience on a wide range of devices and screen sizes.

Real-Time Data Updates: Leveraged React Query to ensure real-time updates and synchronization of product data, cart status, and user information.

User Notifications: Integrated React Toastify for real-time notifications, enhancing user interaction and feedback.

Elegant UI: Combined Tailwind CSS and Daisy UI to create a visually appealing and consistent design, with a focus on usability and user experience.
    `
    ,
    url: 'https://01-big-react-comfy-store-project.netlify.app/',

    github: 'https://github.com/Keerti-kumar-shakya/big-react-redux-projects/tree/main/01-%20comfy%20store%20app',

    projectName: 'comfy store app'
  
  },

 

]


