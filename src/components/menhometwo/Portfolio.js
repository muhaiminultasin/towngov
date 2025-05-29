import React from 'react'
import { Link } from 'react-router-dom'
import Event12 from '../../assets/image/event/event-12.jpg'
import Event13 from '../../assets/image/event/event-13.jpg'
import Event14 from '../../assets/image/event/event-14.jpg'
import Event15 from '../../assets/image/event/event-15.jpg'

function Portfolio() {

  return (
    <>
        <section className="portfolio-two-section">
            <div className="container">
                <div className="portfolio-two-box">
                <div className="section-title-box text-center">
                    <div className="section-tagline">Our recent works</div>
                   
                    <h2 className="section-title">
                    Explore City Highlights <br />
                    Portfolios
                    </h2>
                    
                </div>
               
                </div>
                
            </div>
            <div className="portfolio-two-content">
                <div className="container">
                <div className="portfolio-two-carousel owl-carousel owl-theme">

                    <div className="portfolio-two-card">
                    <div className="item">
                        <img src={Event12} className="img-fluid" alt="img-44" />
                    </div>
                    
                    <div className="portfolio-two-card-content">
                        <Link to="/portfoliodeatils">Tourist Place Markoin</Link>
                        <div className="portfolio-two-card-icon">
                        <Link to="/portfoliodeatils">
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    </div>
                    
                    <div className="portfolio-two-card">
                    <div className="item">
                        <img src={Event13} className="img-fluid" alt="img-45" />
                    </div>
                    
                    <div className="portfolio-two-card-content">
                        <Link to="/portfoliodeatils">Metro Train</Link>
                        <div className="portfolio-two-card-icon">
                        <Link to="/portfoliodeatils">
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    </div>
                    
                    <div className="portfolio-two-card">
                    <div className="item">
                        <img src={Event14} className="img-fluid" alt="img-46" />
                    </div>
                    
                    <div className="portfolio-two-card-content">
                        <Link to="/portfoliodeatils">Goverment Collage MKS</Link>
                        <div className="portfolio-two-card-icon">
                        <Link to="/portfoliodeatils">
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    </div>
                    
                    <div className="portfolio-two-card">
                    <div className="item">
                        <img src={Event15} className="img-fluid" alt="img-47" />
                    </div>
                    
                    <div className="portfolio-two-card-content">
                        <Link to="/portfoliodeatils">Exhibition Hall</Link>
                        <div className="portfolio-two-card-icon">
                        <Link to="/portfoliodeatils">
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
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

export default Portfolio