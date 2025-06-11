import React from 'react'
import Gallery01 from '../../assets/image/Home/konstantine-trundayev.jpg'
import Gallery02 from '../../assets/image/Home/cassia-tofano.jpg'
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
                        <div className="section-tagline">Our introductions</div>
                       
                        <h1 className="">
                        Building Sustainable, Resilient, and Community-Driven Housing for All

                        </h1>
                        <p>
                        Aliquam viverra arcu. Donec aliquet blandit enim feugiat.
                        Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh
                        egestas tempus turpis, sit amet mattis magna varius non.
                        </p>
                    </div>
                   
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-6">
                        <div className="about-card">
                            <h4 className="about-title">
                            <i className="fa-solid fa-circle-check" />
                            Business &amp; Economy
                            </h4>
                            <p className="about-text">
                            Lorem ipsum dolor sited amet consectetur notted.
                            </p>
                        </div>
                        
                        </div>
                        
                        <div className="col-xl-6 col-lg-12 col-md-6">
                        <div className="about-card">
                            <h4 className="about-title">
                            <i className="fa-solid fa-circle-check" />
                            Health &amp; Education
                            </h4>
                            <p className="about-text">
                            Lorem ipsum dolor sited amet consectetur notted.
                            </p>
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    <div className="about-author-box">
                        <div className="about-author-image">
                            <img src={gallery04} className="img-fluid" alt="img-5" />
                        </div>
                       
                        <div className="about-author-box-meta">
                        <h5>Mr. Kevin Martin</h5>
                        <span>City Mayor</span>
                        </div>
                       
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