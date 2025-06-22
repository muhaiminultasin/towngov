import React from 'react'
import { Link } from 'react-router-dom'
import Team01 from '../../../assets/image/team/team-1.jpg';
import Team02 from '../../../assets/image/team/team-2.jpg';
import Team03 from '../../../assets/image/team/team-3.jpg';
import Team04 from '../../../assets/image/team/team-4.jpg';


function Team() {
  return (
    <>
        <section className="team-section">
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="team-inner">
                    <div className="section-title-box">
                        <div className="section-tagline">team members</div>
                        <h2 className="section-title">
                           Meet Our Professional Team
                        </h2>
                    </div>
                   
                    </div>
                    
                </div>
                
                <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="team-box">
                    <p>
                        Meet the talented experts who are already working behind GH!
                    </p>
                    </div>
                    
                </div>
                
                </div>
                
                <div className="row row-gutter-y-30">
                <div className="col-12 col-md-6 col-xl-3">
                    <div className="team-card">
                    <div className="team-card-img">
                        <img src={Team01} className="img-fluid" alt="img-40" />
                        <div className="team-card-icon">
                        <Link to="https://in.pinterest.com/" className="pinterest">
                            <i className="fa-brands fa-pinterest-p" />
                        </Link>
                        <Link to="https://twitter.com/" className="twitter">
                            <i className="fa-brands fa-twitter" />
                        </Link>
                        <Link to="https://www.facebook.com/" className="facebook">
                            <i className="fa-brands fa-facebook" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    <div className="team-card-content">
                        <h4>
                        <Link to="/teamdetails">Sarah Albert</Link>
                        </h4>
                        <p>Consultant</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-12 col-md-6 col-xl-3">
                    <div className="team-card">
                    <div className="team-card-img">
                        <img src={Team02} className="img-fluid" alt="img-41" />
                        <div className="team-card-icon">
                        <Link to="https://in.pinterest.com/" className="pinterest">
                            <i className="fa-brands fa-pinterest-p" />
                        </Link>
                        <Link to="https://twitter.com/" className="twitter">
                            <i className="fa-brands fa-twitter" />
                        </Link>
                        <Link to="https://www.facebook.com/" className="facebook">
                            <i className="fa-brands fa-facebook" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    <div className="team-card-content">
                        <h4>
                        <Link to="/teamdetails">Mike Hardson</Link>
                        </h4>
                        <p>Consultant</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-12 col-md-6 col-xl-3">
                    <div className="team-card">
                    <div className="team-card-img">
                        <img src={Team03} className="img-fluid" alt="img-42" />
                        <div className="team-card-icon">
                        <Link to="https://in.pinterest.com/" className="pinterest">
                            <i className="fa-brands fa-pinterest-p" />
                        </Link>
                        <Link to="https://twitter.com/" className="twitter">
                            <i className="fa-brands fa-twitter" />
                        </Link>
                        <Link to="https://www.facebook.com/" className="facebook">
                            <i className="fa-brands fa-facebook" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    <div className="team-card-content">
                        <h4>
                        <Link to="/teamdetails">Christine Eve</Link>
                        </h4>
                        <p>Consultant</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-12 col-md-6 col-xl-3">
                    <div className="team-card">
                    <div className="team-card-img">
                        <img src={Team04} className="img-fluid" alt="img-43" />
                        <div className="team-card-icon">
                        <Link to="https://in.pinterest.com/" className="pinterest">
                            <i className="fa-brands fa-pinterest-p" />
                        </Link>
                        <Link to="https://twitter.com/" className="twitter">
                            <i className="fa-brands fa-twitter" />
                        </Link>
                        <Link to="https://www.facebook.com/" className="facebook">
                            <i className="fa-brands fa-facebook" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    <div className="team-card-content">
                        <h4>
                        <Link to="/teamdetails">John Martin</Link>
                        </h4>
                        <p>Consultant</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Team