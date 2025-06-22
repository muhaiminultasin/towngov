import React from 'react'
import Eventdeatils from '../../../assets/image/event/event-details-1.1.jpg'
import Eventdeatils01 from '../../../assets/image/event/event-details-1.jpg'
import Eventdeatils02 from '../../../assets/image/event/event-details-2.jpg'
import Eventdeatils03 from '../../../assets/image/event/event-details-3.jpg'
import Eventdeatils04 from '../../../assets/image/event/event-details-4.jpg'
import Event09 from '../../../assets/image/event/event-9.jpg'
import Event10 from '../../../assets/image/event/event-10.jpg'
import Event11 from '../../../assets/image/event/event-11.jpg'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';



function First() {

    const settings = {
        items: 3,
			nav:false,
			loop: true,
			margin:10,
			autoplay:true,
			smartSpeed:2000,
			responsive:{
				0:{
						items:1,
				},
				767:{
						items:2
				},
				1199: {
					items:3
				}
			}
      };

  return (
    <>
        <section className="event-details-section">
            <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="event-details-inner-box">
                        <img src={Eventdeatils} className="img-fluid" alt="img-173" />
                        <div className="event-details-meta">
                            <div className="event-details-meta-number">
                                <span>28</span>
                            </div>
                            
                            <div className="event-details-meta-date">
                                <span>October 2022</span>
                            </div>
                        </div>
                        
                        </div>
                        
                    </div>
                   
                    <div className="col-lg-8">
                        <div className="event-details-content-box">
                        <h4>Organizing 2022 city photography new contest</h4>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly
                            believable. If you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn't anything embarrassing hidden in the
                            middle of text.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum ley of type and
                            scrambled it to make a type specimen book.
                        </p>
                        <h3>Event Requirements</h3>
                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type simen book.
                        </p>
                        <ul className="list-unstyled list-style-three">
                            <li>
                            <i className="fa-solid fa-circle-check" />
                            <h5> Nsectetur cing do not elit.</h5>
                            </li>
                            
                            <li>
                            <i className="fa-solid fa-circle-check" />
                            <h5>Suspe ndisse suscipit sagittis in leo.</h5>
                            </li>
                            
                            <li>
                            <i className="fa-solid fa-circle-check" />
                            <h5>Entum estibulum dignissim lipsm posuere.</h5>
                            </li>
                            
                        </ul>
                        
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. orem Ipsum has been the industry's standard dummy text
                            ever since the when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                        <h3 className="event-details-title">Speakers &amp; Chief Guests</h3>
                        <div className="event-details-speaker-box">
                            <div className="row row-gutter-30">
                            <div className="col-xl-3 col-md-6">
                                <div className="event-speaker-list">
                                <div className="event-speaker-list-img">
                                    <img src={Eventdeatils01} className="img-fluid" alt="img-174" />
                                </div>
                                
                                <h5>
                                    {" "}
                                    <Link to="/teamdetails">Kevin Martin</Link>
                                </h5>
                                <p>Auditor</p>
                                </div>
                                
                            </div>
                           
                            <div className="col-xl-3 col-md-6">
                                <div className="event-speaker-list">
                                <div className="event-speaker-list-img">
                                    <img src={Eventdeatils02} className="img-fluid" alt="img-175" />
                                </div>
                                
                                <h5>
                                    <Link to="/teamdetails">Jessica Brown</Link>
                                </h5>
                                <p>Auditor</p>
                                </div>
                                
                            </div>
                           
                            <div className="col-xl-3 col-md-6">
                                <div className="event-speaker-list">
                                <div className="event-speaker-list-img">
                                    <img src={Eventdeatils03} className="img-fluid" alt="img-176" />
                                </div>
                                
                                <h5>
                                    {" "}
                                    <Link to="/teamdetails">Mike Hardson</Link>
                                </h5>
                                <p>Auditor</p>
                                </div>
                                
                            </div>
                           
                            <div className="col-xl-3 col-md-6">
                                <div className="event-speaker-list">
                                <div className="event-speaker-list-img">
                                    <img src={Eventdeatils04} className="img-fluid" alt="img-177" />
                                </div>
                                
                                <h5>
                                    <Link to="/teamdetails">Christine Eve</Link>
                                </h5>
                                <p>Auditor</p>
                                </div>
                                
                            </div>
                           
                            </div>
                            
                        </div>
                        
                        <div className="event-details-gallery-box">
                            <h3>Our Gallery</h3>
                            <OwlCarousel className="event-details-carousel owl-carousel owl-theme" {...settings}>

                                <div className="item">
                                    <img src={Event09} className="img-fluid" alt="img-178" />
                                </div>
                                
                                <div className="item">
                                    <img src={Event10} className="img-fluid" alt="img-179" />
                                </div>
                                
                                <div className="item">
                                    <img src={Event11} className="img-fluid" alt="img-180" />
                                </div>
                            
                            </OwlCarousel>
                            
                        </div>
                        
                        <div className="event-details-booking-button">
                            <Link to="/eventdetails" className="btn btn-primary"> Reserve My Seat Now </Link>
                        </div>
                        
                        </div>
                        
                    </div>
                   
                    <div className="col-lg-4">
                        <div className="sidebar">
                        <div className="sidebar-widget-event-meta-box">
                            <div className="sidebar-widget-event-meta-details">
                            <div className="sidebar-widget-event-box">
                                <h6>Starting Time:</h6>
                                <p>8:00 am to 2:00 pm</p>
                            </div>
                           
                            <div className="sidebar-widget-event-box">
                                <h6>Date:</h6>
                                <p>20 October, 2022</p>
                            </div>
                           
                            <div className="sidebar-widget-event-box">
                                <h6>Categroy:</h6>
                                <p>
                                <Link to="#">Photography</Link>, <Link to="#">Lifestyle</Link>
                                </p>
                            </div>
                           
                            <div className="sidebar-widget-event-box">
                                <h6>Website:</h6>
                                <span>
                                <Link to="#">www.company.com</Link>
                                </span>
                            </div>
                           
                            <div className="sidebar-widget-event-box">
                                <h6>Location:</h6>
                                <p>8 Street, San Marcos London D29,UK</p>
                            </div>
                           
                            </div>
                            
                            <div className="sidebar-widget-event-meta-map">
                                <div className="google-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12083.735079362054!2d-74.01702461732008!3d40.785470167558394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258131938b8d5%3A0xe39c30a8afef2d96!2sWest%20New%20York%2C%20NJ%2007093%2C%20USA!5e0!3m2!1sen!2sin!4v1668832966742!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                            </div>
                            
                            <div className="sidebar-widget-event-meta-socials">
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
                        
                        </div>
                       
                    </div>
                   
                    </div>
                    
            </div>
        </section>

    </>
  )
}

export default First