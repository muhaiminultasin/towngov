import React from 'react'
import Deatilslast from '../../../assets/image/causes/cause-details-1.1.jpg'
import Deatils01 from '../../../assets/image/causes/causes-details-1.jpg'
import Deatils02 from '../../../assets/image/causes/causes-details-2.jpg'
import Deatils03 from '../../../assets/image/causes/causes-details-3.jpg'
import Deatils04 from '../../../assets/image/causes/causes-details-4.jpg'
import Deatils05 from '../../../assets/image/causes/causes-details-5.jpg'
import Causes03 from '../../../assets/image/causes/causes-3.jpg'
import Causes05 from '../../../assets/image/causes/causes-5.jpg'
import { Link } from 'react-router-dom'


function First() {
  return (
    <>
        <section className="causes-details-section">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="causes-details-box-img">
                        <img src={Deatilslast} className="img-fluid" alt="img-126" />
                    </div>
                    
                    <div className="causes-details-content-box">
                    <div className="causes-details-funding">
                        <div className="causes-details-progressbar">
                        <div className="causes-details-progressbar-inner count-box" data-percentage="36%" style={{width: "36%"}}>
                            <div className="causes-details-progressbar-text count-text"> 36% </div>
                        </div>
                       
                        </div>
                        
                        <div className="causes-details-funding-list">
                        <div className="causes-details-funding-item">
                            <div className="causes-details-funding-amount">$25,270</div>
                           
                            <div className="causes-details-funding-text">Raised</div>
                            
                        </div>
                        
                        <div className="causes-details-funding-item">
                            <div className="causes-details-funding-amount">$30,000</div>
                           
                            <div className="causes-details-funding-text">Goal</div>
                            
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    <h4>Your little help can heal their pains</h4>
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
                        and more recently with desktop publishing software like. Lorem Ipsum
                        is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.{" "}
                    </p>
                    </div>
                   
                    <div className="causes-details-imgbox">
                    <div className="row row-gutter-y-30">
                        <div className="col-lg-6">
                        <div className="causes-details-img">
                            <img src={Causes05} className="img-fluid" alt="img-127" />
                        </div>
                        
                        </div>
                        
                        <div className="col-lg-6">
                        <div className="causes-details-img">
                            <img src={Causes03} className="img-fluid" alt="img-128" />
                        </div>
                        
                        </div>
                        
                    </div>
                   
                    </div>
                    
                    <div className="causes-details-summary-box">
                    <h3>Summary</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>
                    </div>
                    
                    <ul className="list-unstyled list-style-three">
                    <li>
                        <i className="fa-solid fa-circle-check" />
                        <h5>Making this first true generator lorem</h5>
                    </li>
                    
                    <li>
                        <i className="fa-solid fa-circle-check" />
                        <h5>Many desktop publish packages is not simply</h5>
                    </li>
                    
                    <li>
                        <i className="fa-solid fa-circle-check" />
                        <h5>If you are going to passage has roots in a piece</h5>
                    </li>
                    
                    </ul>
                    
                    <div className="causes-details-text">
                    <p>
                        It was popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like. Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry.
                    </p>
                    </div>
                    
                    <div className="causes-details-button">
                    <Link to="/causedetails" className="btn btn-primary">
                        Donate Now
                    </Link>
                    </div>
                   
                </div>
                
                <div className="col-lg-4">
                    <div className="sidebar">
                    <div className="sidebar-widget sidebar-widget-organizer">
                        <div className="sidebar-widget-img">
                        <img src={Deatils01} className="img-fluid" alt="img-129" />
                        </div>
                        
                        <div className="sidebar-widget-organizer-content">
                        <span>Created 20 Oct, 2022</span>
                        <div className="sidebar-widget-organizer-name">
                            Organizer:<Link to="#">Christine Eve</Link>
                        </div>
                        
                        <ul className="list-unstyled">
                            <li>
                            <i className="fa-solid fa-tag" />
                            <Link to="#">Health</Link>
                            </li>
                            <li>
                            <i className="fa-solid fa-location-pin" />
                            New York, USA
                            </li>
                        </ul>
                        
                        </div>
                        
                    </div>
                    
                    <div className="sidebar-widget sidebar-widget-recent-donations">
                        <h4>Recent Donations</h4>
                        <div className="sidebar-recent-donations">
                        <div className="sidebar-recent-donations-img">
                            <img src={Deatils02} className="img-fluid" alt="img-130" />
                        </div>
                        
                        <div className="sidebar-recent-donations-content">
                            <span>$20</span>
                            <div className="sidebar-widget-organizer-name">
                            <Link to="#">David Marks</Link>
                            <span>3 hours ago</span>
                            </div>
                            
                            <p>God bless you dear</p>
                        </div>
                        
                        </div>
                        
                        <div className="sidebar-recent-donations">
                        <div className="sidebar-recent-donations-img">
                            <img src={Deatils03} className="img-fluid" alt="img-131" />
                        </div>
                        
                        <div className="sidebar-recent-donations-content">
                            <span>$60</span>
                            <div className="sidebar-widget-organizer-name">
                            <Link to="#">Aleesha Brown </Link>
                            <span>3 hours</span>
                            </div>
                            
                            <p>God bless you dear</p>
                        </div>
                        
                        </div>
                        
                        <div className="sidebar-recent-donations">
                        <div className="sidebar-recent-donations-img">
                            <img src={Deatils04} className="img-fluid" alt="img-132" />
                        </div>
                        
                        <div className="sidebar-recent-donations-content">
                            <span>$30</span>
                            <div className="sidebar-widget-organizer-name">
                            <Link to="#">Kevin Martin</Link>
                            <span>8 hours ago</span>
                            </div>
                            
                            <p>God bless you dear</p>
                        </div>
                        
                        </div>
                        
                        <div className="sidebar-recent-donations">
                        <div className="sidebar-recent-donations-img">
                            <img src={Deatils05} className="img-fluid" alt="img-133" />
                        </div>
                        
                        <div className="sidebar-recent-donations-content">
                            <span>$110</span>
                            <div className="sidebar-widget-organizer-name">
                            <Link to="#">Anonymous</Link>
                            <span>1 day ago</span>
                            </div>
                            
                        </div>
                        
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