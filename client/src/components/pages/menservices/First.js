import React from 'react'
import { Link } from 'react-router-dom'

function First() {
  return (
    <>
        <section className="service-one-section">
            <div className="container">
                <div className="row row-gutter-30">
                <div className="col-lg-6 col-xl-4">
                    <div className="service-one-card">
                    <div className="service-one-icon">
                        <Link to="/servicedetails">
                            <i className="flaticon-education" />
                        </Link>
                    </div>
                    
                    <div className="service-one-card-content">
                        <h4>
                        <Link to="/servicedetails"> Education &amp; Skills</Link>
                        </h4>
                        <p>When nothing prevents our being able to we like best every.</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="service-one-card">
                    <div className="service-one-icon">
                        <Link to="/servicedetails">
                        <i className="flaticon-public-transport-1" />
                        </Link>
                    </div>
                    
                    <div className="service-one-card-content">
                        <h4>
                        <Link to="/servicedetails">Roads &amp; Transportation</Link>
                        </h4>
                        <p>When nothing prevents our being able to we like best every.</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="service-one-card">
                    <div className="service-one-icon">
                        <Link to="/servicedetails">
                        <i className="flaticon-agriculture" />
                        </Link>
                    </div>
                    
                    <div className="service-one-card-content">
                        <h4>
                        <Link to="/servicedetails">Culture &amp; Recreation</Link>
                        </h4>
                        <p>When nothing prevents our being able to we like best every.</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="service-one-card">
                    <div className="service-one-icon">
                        <Link to="/servicedetails">
                        <i className="flaticon-factory" />
                        </Link>
                    </div>
                    
                    <div className="service-one-card-content">
                        <h4>
                        <Link to="/servicedetails">Business &amp; Industry</Link>
                        </h4>
                        <p>When nothing prevents our being able to we like best every.</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="service-one-card">
                    <div className="service-one-icon">
                        <Link to="/servicedetails">
                        <i className="flaticon-businessman" />
                        </Link>
                    </div>
                    
                    <div className="service-one-card-content">
                        <h4>
                        <Link to="/servicedetails">Jobs &amp; Unemployment</Link>
                        </h4>
                        <p>When nothing prevents our being able to we like best every.</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="service-one-card">
                    <div className="service-one-icon">
                        <Link to="/servicedetails">
                        <i className="flaticon-clinic" />
                        </Link>
                    </div>
                    
                    <div className="service-one-card-content">
                        <h4>
                        <Link to="service-details">Health &amp; Securities</Link>
                        </h4>
                        <p>When nothing prevents our being able to we like best every.</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                
            </div>
        </section>

        <section className="cta-three">
            <div className="cta-three-inner">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="cta-three-content text-center">
                        <h2 className="section-title text-white">
                        City Goverment Offers a Wide <br />
                        Range of Online Services
                        </h2>
                        <Link to="/servicedetails" className="btn btn-primary"> Donate </Link>
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