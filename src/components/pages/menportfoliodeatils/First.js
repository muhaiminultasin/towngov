import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio01 from '../../../assets/image/portfolio/portfolio-1.jpg'
import Portfolio02 from '../../../assets/image/portfolio/portfolio-2.jpg'
import Portfolio03 from '../../../assets/image/portfolio/portfolio-3.jpg'
import Portfolio04 from '../../../assets/image/portfolio/portfolio-4.jpg'
import Deatils01 from '../../../assets/image/portfolio/portfolio-details-1.jpg'
import OwlCarousel from 'react-owl-carousel';



function First() {

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
        <section className="portfolio-details">
            <div className="container">
                <img src={Deatils01} className="img-fluid" alt="img-109" />
                <div className="portfolio-details-info">
                <div className="portfolio-details-info-item">
                    <span>Category:</span>
                    <p>Business</p>
                </div>
               
                <div className="portfolio-details-info-item">
                    <span>Department:</span>
                    <p>Finance and Economy</p>
                </div>
               
                <div className="portfolio-details-info-item">
                    <span>Date:</span>
                    <p>20 October, 2022</p>
                </div>
               
                <div className="portfolio-details-info-item">
                    <span>Location:</span>
                    <p>New York City</p>
                </div>
               
                <div className="portfolio-details-info-item portfolio-details-info-socials">
                    <a href="https://twitter.com/">
                        <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="https://www.facebook.com/">
                        <i className="fa-brands fa-facebook" />
                    </a>
                    <a href="https://in.pinterest.com/">
                        <i className="fa-brands fa-pinterest-p" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <i className="fa-brands fa-instagram" />
                    </a>
                </div>
                
                </div>
                
                <div className="portfolio-details-content">
                <div className="portfolio-details-content-title">
                    <h3>Metro Train Station</h3>
                </div>
               
                <div className="portfolio-details-content-text">
                    <p>
                    Tincidunt elit magnis nulla facilisis sagittis sapien nunc amet
                    ultrices dolores sit ipsum velit purus aliquet massa fringilla leo
                    orci. Sapien nunc amet ultrices, dolores sit ipsum velit massa
                    fringilla leo orci dolors sit amet elit amet.{" "}
                    </p>
                    <p>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here', making it
                    look like readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model text, and a
                    search for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years, sometimes by
                    accident, humour and the like.
                    </p>
                    <p>
                    All you need to do is unlock the riches that have been locked away
                    with-in you. Being lucky in life is the result of putting yourself
                    into action for good luck to happen to you. You’ve probably heard the
                    statement “The harder I work the luckier I get”.{" "}
                    </p>
                </div>
                
                </div>
               
            </div>
        </section>

        <section className="portfolio-details-nav">
            <div className="container">
                <div className="portfolio-details-nav-inner">
                <div className="portfolio-details-nav-item prev-item">
                    <div className="portfolio-details-nav-icon">
                    <Link to="/portfoliodeatils">
                        <i className="fa-solid fa-arrow-left-long" />
                    </Link>
                    </div>
                    
                    <div className="portfolio-details-nav-content">
                    <span>Previous Post</span>
                    <h5>
                        <Link to="/portfoliodeatils">Room Art Museum</Link>
                    </h5>
                    </div>
                    
                </div>
               
                <div className="portfolio-details-nav-item next-item">
                    <div className="portfolio-details-nav-icon">
                    <Link to="/portfoliodeatils">
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                    </div>
                    
                    <div className="portfolio-details-nav-content">
                    <span>Next Post</span>
                    <h5>
                        <Link to="/portfoliodeatils">Spring Conference</Link>
                    </h5>
                    </div>
                    
                </div>
                
                </div>
            </div>
        </section>

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
                        <img src={Portfolio01} className="img-fluid" alt="img-110" />
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
                        <img src={Portfolio02} className="img-fluid" alt="img-111" />
                        <div className="portfolio-card-meta">
                            <div className="portfolio-card-text">
                            <Link to="/portfoliodeatils">Intercity</Link>
                            </div>
                            <div className="portfolio-card-title">
                            <Link to="/portfoliodeatils">Grand Central Terminal</Link>
                            </div>
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    <div className="item">
                        <div className="portfolio-card">
                        <img src={Portfolio03} className="img-fluid" alt="img-112" />
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
                        <img src={Portfolio04} className="img-fluid" alt="img-113" />
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

export default First