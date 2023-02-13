import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="pt-5 pb-5">
        <div className="container-fluid">
        <div class=" d-flex align-items-center justify-content-center">
            <div className='row mt-5'>
            <div className='col-lg-6 col-md-12 col-12 mt-5'>
              <div className='about-img'>
            <img className='img-fluid' src='https://spazio.ae/wp-content/uploads/2017/08/luxury-master-bedroom-design.jpg' alt=''/>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-12 mt-5 md-5 d-flex align-items-center'>
        <div className="contain ">
            <h3>Why Choose Us</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis incid iusto doloremque
               distinctio aliquam ex delectus voluptate,sed ipsa fugit dignissimos molestiae earum labore a 
               in quibusdam perspiciatis aperiam totam?
            </p>
            <div className="d-flex justify-content-start">
          <Link to={"/products"}>
          <button type="button" className="btn">Shop Now</button>
          </Link>
          </div>
          </div>
          </div>
          </div>
          </div>  
     </div>
     </section>
              

  
 
  )
}

export default About