import React from 'react'
import { Link } from 'react-router-dom'
import Department05 from '../../../assets/image/department/department-5.jpg'
import Department06 from '../../../assets/image/department/department-6.jpg'
import Department07 from '../../../assets/image/department/department-7.jpg'

function Offer() {
  return (
    <>
        <section className="department-two-section">
            <div className="container">
                <div className="row">
                <div className="col-12 col-lg-12">
                    <div className="department-two-box">
                    <div className="section-title-box text-center">
                        <div className="section-tagline">WHAT WE’RE OFFERING</div>
                        <h2 className="section-title"> Explore Our Goverment <br /> Departments </h2>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-12 col-lg-4">
                    <div className="department-two-card">
                    <div className="department-two-imgbox">
                        <div className="department-two-img">
                        <img src={Department05} className="img-fluid" alt="img-37" />
                            <Link to="/departmentdetails" />
                        </div>
                        
                        <div className="department-two-img-icon">
                            <Link to="/departmentdetails">
                                <i className="flaticon-team" />
                            </Link>
                        </div>
                        
                    </div>
                   
                    <div className="department-two-content">
                        <h4>
                            <Link to="/departmentdetails">Business &amp; Industry</Link>
                        </h4>
                        <p>
                        Aliq is notm hendr erit a augue insu image pellen simply free
                        text.
                        </p>
                        <div className="department-two-button">
                            <Link to="/departmentdetails">
                                <i className="fa-solid fa-arrow-right-long" />
                                <span>Read More</span>{" "}
                            </Link>
                        </div>
                        
                    </div>
                    
                    </div>
                    
                </div>
               
                <div className="col-12 col-lg-4">
                    <div className="department-two-card">
                    <div className="department-two-imgbox">
                        <div className="department-two-img">
                        <img src={Department06} className="img-fluid" alt="img-38" />
                        <Link to="/departmentdetails" />
                        </div>
                        
                        <div className="department-two-img-icon">
                        <Link to="/departmentdetails">
                            <i className="flaticon-police-badge-1" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    <div className="department-two-content">
                        <h4>
                        <Link to="/departmentdetails">Policing and Crime</Link>
                        </h4>
                        <p>
                        Aliq is notm hendr erit a augue insu image pellen simply free
                        text.
                        </p>
                        <div className="department-two-button">
                        <Link to="/departmentdetails">
                            <i className="fa-solid fa-arrow-right-long" />
                            <span>Read More</span>
                        </Link>
                        </div>
                        
                    </div>
                    
                    </div>
                    
                </div>
               
                <div className="col-12 col-lg-4">
                    <div className="department-two-card">
                    <div className="department-two-imgbox">
                        <div className="department-two-img">
                        <img src={Department07} className="img-fluid" alt="img-39" />
                            <Link to="/departmentdetails" />
                        </div>
                        
                        <div className="department-two-img-icon">
                        <Link to="/departmentdetails">
                            <i className="flaticon-agriculture" />
                        </Link>
                        </div>
                        
                    </div>
                   
                    <div className="department-two-content">
                        <h4>
                        <Link to="/departmentdetails">Agriculture and Food</Link>
                        </h4>
                        <p>
                        Aliq is notm hendr erit a augue insu image pellen simply free
                        text.
                        </p>
                        <div className="department-two-button">
                        <Link to="/departmentdetails">
                            <i className="fa-solid fa-arrow-right-long" />
                            <span>Read More</span>
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

export default Offer