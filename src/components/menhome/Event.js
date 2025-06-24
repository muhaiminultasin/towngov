import React from 'react'
import { Link } from 'react-router-dom'
import Event02 from '../../assets/image/shot.jpg';
import Event03 from '../../assets/image/urban.jpg'

function Event() {
  return (
    <>
        <section className="event-section">
            <div className="container">
                    <div className="event-section-inner">
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="section-title-box">
                            <div className="section-tagline">LATEST EVENTS</div>
                            <h2 className="section-title">
                            Upcoming Webinars & Events
                            </h2>
                        </div>
                        
                        </div>
                       
                        <div className="col-lg-6">
                        <div className="event-content-box">
                            <div className="section-text">
                            <p>
                               Discover what's coming up! Join our expert-led webinars and live events to learn new skills, explore trends, and connect with like-minded professionals.
                            </p>
                            </div>
                            
                        </div>
                       
                        </div>
                        
                    </div>
                    
                    <div className="row row-gutter-y-40">
                        <div className="col-xl-5">
                        <div className="event-subscribe-card">
                            <div className="event-details-card-title">
                            <div className="event-icon">
                                <i className="flaticon-envelope" />
                            </div>
                            
                            <h5>Subscribe</h5>
                            <p>Get latest news &amp; events details</p>
                            </div>
                            
                            <div className="event-details-card-content">
                            <form action="assets/inc/sendemail.php" className="contact-form" method="post" >
                                <div className="form-group">
                                <input type="email" id="Email" className="input-text" placeholder="Email address" name="email" required="" />
                                </div>
                               
                                <button className="btn btn-primary w-100">Subscribe</button>
                                
                                <p>Never share your email with others.</p>
                            </form>
                            
                            </div>
                            
                        </div>
                       
                        </div>
                       
                        <div className="col-xl-7">
                        <div className="event-card">
                            <div className="event-card-image">
                            <div className="event-card-image-inner">
                                <Link to="/eventdetails">
                                    <img src={Event02} className="img-fluid" alt="img-20" />
                                </Link>
                                <div className="event-card-meta">
                                <div className="event-meta-number">
                                    <span>25</span>
                                </div>
                                
                                <div className="event-meta-date">
                                    <span>March 2025</span>
                                </div>
                                
                                </div>
                                
                            </div>
                          
                            </div>
                           
                            <div className="event-card-content">
                            <div className="event-card-info">
                                <ul className="list-unstyled">
                                <li>
                                    <i className="fa-solid fa-clock" />
                                    <span>March 2025</span>
                                </li>
                                
                                <li>
                                    <i className="fa-sharp fa-solid fa-location-pin" />
                                    <span>New Hyde Park, NY 11040</span>
                                </li>
                                
                                </ul>
                                
                            </div>
                           
                            <div className="event-card-title">
                                <h4>
                                <Link to="/eventdetails">
                                    Sustainable Housing Roundtable
                                </Link>
                                </h4>
                            </div>
                            
                            </div>
                            
                        </div>
                        
                        <div className="event-card">
                            <div className="event-card-image">
                            <div className="event-card-image-inner">
                                <Link to="/eventdetails">
                                <img src={Event03} className="img-fluid" alt="img-21" />
                                </Link>
                                <div className="event-card-meta">
                                <div className="event-meta-number">
                                    <span>04</span>
                                </div>
                                
                                <div className="event-meta-date">
                                    <span>April 2025</span>
                                </div>
                                
                                </div>
                                
                            </div>
                          
                            </div>
                            
                            <div className="event-card-content">
                            <div className="event-card-info">
                                <ul className="list-unstyled">
                                <li>
                                    <i className="fa-solid fa-clock" />
                                    <span>April 2025</span>
                                </li>
                                
                                <li>
                                    <i className="fa-sharp fa-solid fa-location-pin" />
                                    <span>New Hyde Park, NY 11040</span>
                                </li>
                                
                                </ul>
                                
                            </div>
                           
                            <div className="event-card-title">
                                <h4>
                                <Link to="/eventdetails">
                                    Investor Q&A: Urban Village Initiative
                                </Link>
                                </h4>
                            </div>
                            
                            </div>
                           
                        </div>
                        
                        </div>
                       
                    </div>
                    
                    </div>
                    
            </div>
        </section>

        <section className="cta-five-section">
            <div className="container">
                <div className="cta-five-card">
                <div className="cta-five-card-icon">
                    <i className="flaticon-file" />
                </div>
                
                <div className="cta-five-content">
                    <h4>See All Events and Join Us</h4>
                    <p>
                    Explore upcoming events, webinars, and roundtables to connect, learn, and contribute <br/> to the future of resilient, inclusive housing solutions.
                    </p>
                </div>
                
                <div className="cta-five-button">
                    <Link to="/events" className="btn btn-primary">
                    All Events
                    </Link>
                </div>
                
                <div className="cta-five-img">
                    <i className="flaticon-file" />
                </div>
               
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Event