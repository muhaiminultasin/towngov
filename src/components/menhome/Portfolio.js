import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio01 from '../../assets/image/portfolio5.jpg'
import Portfolio02 from '../../assets/image/portfolio6.jpg'
import Portfolio03 from '../../assets/image/portfolio7.jpg'
import Portfolio04 from '../../assets/image/portfolio8.jpg'
import OwlCarousel from 'react-owl-carousel';

function Portfolio() {

    const settings = {
        items: 4,
        nav: false,
        margin: 30,
        loop: true,
        autoplay: true,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            767: {
                items: 3,
            },
            991: {
                items: 4,
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
                <div className="portfolio-content container-fluid">
                    <OwlCarousel className="portfolio-carousel owl-carousel owl-theme" {...settings}>

                        <div className="item">
                            <div className="portfolio-card">
                                <img src={Portfolio01} className="img-fluid" alt="img-9" />
                            </div>
                        </div>

                        <div className="item">
                            <div className="portfolio-card">
                                <img src={Portfolio02} className="img-fluid" alt="img-10" />
                            </div>
                        </div>

                        <div className="item">
                            <div className="portfolio-card">
                                <img src={Portfolio03} className="img-fluid" alt="img-11" />
                                
                            </div>
                        </div>

                        <div className="item">
                            <div className="portfolio-card">
                                <img src={Portfolio04} className="img-fluid" alt="img-12" />
                                
                            </div>
                        </div>

                    </OwlCarousel>
                </div>
            </section>
        </>
    );
}

export default Portfolio;
