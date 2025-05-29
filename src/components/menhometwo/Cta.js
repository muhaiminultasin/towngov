import React from 'react'
import { Link } from 'react-router-dom'
import Event02 from '../../assets/image/event/event-2.jpg'
import Event03 from '../../assets/image/event/event-3.jpg'
import Event04 from '../../assets/image/event/event-4.jpg'


function Cta() {
  return (
    <>
        <section className="cta-three">
            <div className="cta-three-inner">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="cta-three-content text-center">
                        <h2 className="section-title text-white">
                            City Goverment Offers a Wide <br /> Range of Online Services
                        </h2>
                        <Link to="/contact" className="btn btn-primary"> Discover More{" "} </Link>
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                
            </div>
        </section>

        <section className="event-two-section">
            <div className="container-fluid">
                <div className="row row-gutter-y-60">
                <div className="col-xxl-4 col-xl-6">
                    <div className="event-two-card">
                    <div className="event-two-card-image">
                        <div className="event-two-card-image-inner">
                        <Link to="/eventdetails">
                            <img src={Event02} className="img-fluid" alt="img-34" />
                        </Link>
                        <div className="event-two-card-meta">
                            <div className="event-two-meta-number">
                            <span>28</span>
                            </div>
                           
                            <div className="event-two-meta-date">
                            <span>October 2022</span>
                            </div>
                            
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    <div className="event-two-card-content">
                        <div className="event-card-info">
                        <ul className="list-unstyled">
                            <li>
                            <i className="fa-solid fa-clock" />
                            <span>08:00am - 05:00pm</span>
                            </li>
                           
                            <li>
                            <i className="fa-sharp fa-solid fa-location-pin" />
                            <span>New Hyde Park, NY 11040</span>
                            </li>
                           
                        </ul>
                       
                        </div>
                       
                        <div className="event-two-card-title">
                        <h4>
                            <Link to="/eventdetails"> Organizing 2022 city photography new contest </Link>
                        </h4>
                        </div>
                       
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-xxl-4 col-xl-6">
                    <div className="event-two-card">
                    <div className="event-two-card-image">
                        <div className="event-two-card-image-inner">
                        <Link to="/eventdetails">
                            <img src={Event03} className="img-fluid" alt="img-35" />
                        </Link>
                        <div className="event-two-card-meta">
                            <div className="event-two-meta-number">
                            <span>28</span>
                            </div>
                           
                            <div className="event-two-meta-date">
                            <span>October 2022</span>
                            </div>
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    <div className="event-two-card-content">
                        <div className="event-card-info">
                        <ul className="list-unstyled">
                            <li>
                            <i className="fa-solid fa-clock" />
                            <span>08:00am - 05:00pm</span>
                            </li>
                           
                            <li>
                            <i className="fa-sharp fa-solid fa-location-pin" />
                            <span>New Hyde Park, NY 11040</span>
                            </li>
                           
                        </ul>
                       
                        </div>
                       
                        <div className="event-two-card-title">
                        <h4>
                            <Link to="/eventdetails">
                            Organizing 2022 city photography new contest
                            </Link>
                        </h4>
                        </div>
                       
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-xxl-4 col-xl-6">
                    <div className="event-two-card">
                    <div className="event-two-card-image">
                        <div className="event-two-card-image-inner">
                        <Link to="/eventdetails">
                            <img src={Event04} className="img-fluid" alt="img-36" />
                        </Link>
                        <div className="event-two-card-meta">
                            <div className="event-two-meta-number">
                            <span>28</span>
                            </div>
                           
                            <div className="event-two-meta-date">
                            <span>October 2022</span>
                            </div>
                            
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    <div className="event-two-card-content">
                        <div className="event-card-info">
                        <ul className="list-unstyled">
                            <li>
                            <i className="fa-solid fa-clock" />
                            <span>08:00am - 05:00pm</span>
                            </li>
                           
                            <li>
                            <i className="fa-sharp fa-solid fa-location-pin" />
                            <span>New Hyde Park, NY 11040</span>
                            </li>
                           
                        </ul>
                       
                        </div>
                       
                        <div className="event-two-card-title">
                        <h4>
                            <Link to="/eventdetails">
                            Organizing 2022 city photography new contest
                            </Link>
                        </h4>
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

export default Cta