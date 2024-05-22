import website_image from '../assets/website-img.svg'

const Navbar = () => {
  return (
   <section className="navbar-section">
    <div className="navbar-container">
      <h2 className='navbar-heading'>Big Projects</h2>
      <img className='image-navbar' src= {website_image} />
    </div>
   </section>
  )
}

export default Navbar
