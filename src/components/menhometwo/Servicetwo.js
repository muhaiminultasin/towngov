import React from 'react'
import { Link } from 'react-router-dom'
import Servise04 from '../../assets/image/services/service-4.jpg'
import Servise05 from '../../assets/image/services/service-5.jpg'


function Servicetwo() {
  return (
    <>
        <section className="service-two-section">
            <div className="container">
                <div className="row row-gutter-y-40">
                <div className="col-12 col-lg-4 col-xl-4">
                    <div className="service-two-card">
                    <div className="service-two-imgbox">
                        <div className="service-two-image">
                        <img src={Servise04} className="img-fluid" alt="img-28" />
                            <Link to="/servicedetails" />
                        </div>
                        
                    </div>
                   
                    <div className="service-two-card-content">
                        <h4>City Visitor Guide</h4>
                        <p>
                        This present moment is perfect simply due to the fact you’re
                        experiencing it.
                        </p>
                        <Link to="/servicedetails">
                        <i className="fa-solid fa-arrow-right-long" />
                        <span>Read More</span>
                        </Link>
                    </div>
                    
                    </div>
                    
                </div>
               
                <div className="col-12 col-lg-4 col-xl-4">
                    <div className="service-two-card">
                    <div className="service-two-imgbox">
                        <div className="service-two-image">
                        <img src={Servise05} className="img-fluid" alt="img-29" />
                            <Link to="/servicedetails" />
                        </div>
                        
                    </div>
                   
                    <div className="service-two-card-content">
                        <h4>Mayor's Priorities</h4>
                        <p>
                        This present moment is perfect simply due to the fact you’re
                        experiencing it.
                        </p>
                        <Link to="/servicedetails">
                            <i className="fa-solid fa-arrow-right-long" />
                            <span>Read More</span>
                        </Link>
                    </div>
                    
                    </div>
                    
                </div>
               
                <div className="col-12 col-lg-4 col-xl-4">
                    <div className="service-link-box">
                    <h4 className="section-title">
                        Government <br />
                        Services
                    </h4>
                    <ul>
                        <li>
                        <Link to="/servicedetails">
                            Public Service Identity
                            <i className="fa-solid fa-chevron-right" />
                        </Link>
                        </li>
                        <li>
                        <Link to="/servicedetails">
                            Apply for a City Job <i className="fa-solid fa-chevron-right" />
                        </Link>
                        </li>
                        <li>
                        <Link to="/servicedetails">
                            Order Birth Certificate{" "}
                            <i className="fa-solid fa-chevron-right" />
                        </Link>
                        </li>
                        <li>
                        <Link to="/servicedetails">
                            National Planning Framework
                            <i className="fa-solid fa-chevron-right" />
                        </Link>
                        </li>
                        <li>
                        <Link to="/servicedetails">
                            Apply for Driving License{" "}
                            <i className="fa-solid fa-chevron-right" />
                        </Link>
                        </li>
                        <li>
                        <Link to="/servicedetails">
                            Get Parking Permit
                            <i className="fa-solid fa-chevron-right" />
                        </Link>
                        </li>
                        <li>
                        <Link to="/servicedetails">
                            Get Hosing Permition <i className="fa-solid fa-chevron-right" />
                        </Link>
                        </li>
                    </ul>
                    
                    </div>
                   
                </div>
               
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Servicetwo