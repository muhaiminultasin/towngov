import React from 'react'
import { Link } from 'react-router-dom'
import Shapes01 from '../../assets/image/shapes/shape-1.png'
import Gallery01 from '../../assets/image/Home/Pic-04.jpg'


function Mayor() {
  return (
    <>
        <section className="mayor-section">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="mayor-box">
                    <div className="section-title-box">
                        <div className="section-tagline">Introduction to GHI</div>
                        <h1 className="">Innovating Housing, Empowering Communities
</h1>
                        <p>
                        Global Housing Initiative (GHI) aims to revolutionize housing through sustainability, technology, and community-driven models. Our approach integrates advanced engineering with social impact, ensuring that everyone has access to safe, affordable, and resilient housing, regardless of their income. <br></br> <br></br>We combine:
NeoPOLYGON Technology (NPT) for cutting-edge, disaster-resistant building solutions.
Urban Village Initiative (UVI) for community-led housing development and investment.
GHI’s Global Network to collaborate with governments, NGOs, and investors for real impact.
                        </p>
                    </div>
                    <div>
                        <Link to="/about">
                            <button className='btn btn-primary'>Discover Our Vission</button>
                        </Link>
                    </div>
                    
                    
                    
                    
                    </div>
                    
                </div>
                
                <div className="col-lg-6">
                    <div className="mayor-img">
                    <img src={Shapes01} className="floated-image-one" alt="img-7" />
                    <img src={Gallery01} alt="img-8" />
                    <div className="mayor-name">Mr. Kevin Martin</div>     
                </div>
                    
                </div>
                
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Mayor