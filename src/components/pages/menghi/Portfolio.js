import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio01 from '../../../assets/image/portfolio/portfolio-1.jpg'
import Portfolio02 from '../../../assets/image/portfolio/portfolio-2.jpg'
import Portfolio03 from '../../../assets/image/portfolio/portfolio-3.jpg'
import Portfolio04 from '../../../assets/image/portfolio/portfolio-4.jpg'
import OwlCarousel from 'react-owl-carousel';


function Portfolio() {

    const settings = {
        items: 4,
            nav:false,
            margin:30,
            loop: true,
            autoplay:true,
            smartSpeed:2000,
            responsive:{
                0:{
                        items:1,
                },
                575:{
                        items:2,
                },
                767:{
                        items:3,
                },
                991: {
                    items:4,
                }
            }
      };


  return (
    <>
        <section className="portfolio-section">
            <div className="section-title-box text-center">
                    <div className="section-tagline">recent work portfolio</div>
                    <h2 className="section-title">
                    Explore City Highlights <br />
                    Portfolios
                    </h2>
            </div>
            <div className="portfolio-content conatainer-fluid">
                <OwlCarousel className="portfolio-carousel owl-carousel owl-theme" {...settings}>

                    <div className="item">
                        <div className="portfolio-card">
                        <img src={Portfolio01} className="img-fluid" alt="img-9" />
                        <div className="portfolio-card-meta">
                            <div className="portfolio-card-text">
                            <Link to="/portfoliodeatils">Places</Link>
                            </div>
                            <div className="portfolio-card-title">
                            <Link to="/portfoliodeatils">Broadway Road</Link>
                            </div>
                        </div>
                        </div>
                       
                    </div>
                   
                    <div className="item">
                        <div className="portfolio-card">
                        <img src={Portfolio02} className="img-fluid" alt="img-10" />
                        <div className="portfolio-card-meta">
                            <div className="portfolio-card-text">
                            <Link to="/portfoliodeatils">Intercity</Link>
                            </div>
                            <div className="portfolio-card-title">
                            <Link to="/portfoliodeatils"> Grand Central Terminal</Link>
                            </div>
                        </div>
                       
                        </div>
                       
                    </div>
                   
                    <div className="item">
                        <div className="portfolio-card">
                        <img src={Portfolio03} className="img-fluid" alt="img-11" />
                        <div className="portfolio-card-meta">
                            <div className="portfolio-card-text">
                            <Link to="/portfoliodeatils">Business</Link>
                            </div>
                            <div className="portfolio-card-title">
                            <Link to="/portfoliodeatils">Empire State Building</Link>
                            </div>
                        </div>
                       
                        </div>
                       
                    </div>
                   
                    <div className="item">
                        <div className="portfolio-card">
                        <img src={Portfolio04} className="img-fluid" alt="img-12" />
                        <div className="portfolio-card-meta">
                            <div className="portfolio-card-text">
                            <Link to="/portfoliodeatils">Travel</Link>
                            </div>
                            <div className="portfolio-card-title">
                            <Link to="/portfoliodeatils">Fulton Center</Link>
                            </div>
                        </div>
                       
                        </div>
                       
                    </div>
                   
                 </OwlCarousel>
            </div>
        </section>
    </>
  )
}

export default Portfolio