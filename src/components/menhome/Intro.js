import React from 'react'
import Gallery01 from '../../assets/image/Intro/city.jpg'
import Gallery02 from '../../assets/image/Intro/Villages.jpg'
import gallery04 from '../../assets/image/gallery/about-4.png'
import Shapes03 from '../../assets/image/shapes/about-3.jpg'


function Intro() {
  return (
    <>
        <section className="about-section">
            <div className="container">
                <div className="row justify-content-between">
                <div className="col-lg-6">
                    <div className="about-image">
                    <div className="about-image-inner img-one">
                        <img src={Gallery01} className="img-fluid" alt="img-2" />
                        <div className="sign-text">Kevin Martin</div>
                        
                        <div className="about-image-caption">
                        <div className="about-image-caption-inner">
                            <span className="about-caption-number">18</span>
                            <span className="about-caption-text"> Years of <br /> experience </span>
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    <div className="about-image-inner img-two">
                        <img src={Shapes03} className="floated-image" alt="img-3" />
                        <img src={Gallery02} className="img-fluid" alt="img-4" />
                    </div>
                    
                    </div>
                   
                </div>
                
                <div className="col-lg-6">
                    <div className="about-inner">
                    <div className="section-title-box">
                        <div className="section-tagline">Global Housing Initiative</div>
                       
                        <h1 className="">
                        Building Sustainable, Resilient, and Community-Driven Housing for All

                        </h1>
                        <p>
                        At the Global Housing Initiative (GHI), we combine cutting-edge technology with community-driven solutions to create sustainable, disaster-resilient, and affordable housing. Through our partnership with NeoPOLYGON Technology (NPT) and the Urban Village Initiative (UVI), we are transforming the future of housing.

                        </p>
                    </div>
                    
                    </div>
                   
                </div>
                
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Intro