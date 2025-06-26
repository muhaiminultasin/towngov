import React from 'react'
import { Link } from 'react-router-dom'
import Gallery01 from "../../../assets/image/impact.jpg";

function First() {
  return (
    <>
        <section className="service-one-section">
            <div className="container">
                <div className="row row-gutter-30">
                <div className="col-lg-6 col-xl-4">
                    <div className="service-one-card">
                    <div className="service-one-icon">
                        <Link to="#">
                            <i className="flaticon-education" />
                        </Link>
                    </div>
                    
                    <div className="service-one-card-content">
                        <h4>
                        <Link to="#"> NeoPOLYGON Technology (NPT)
</Link>
                        </h4>
                        <p>Advanced modular system for resilient, scalable, and disaster-proof housing</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="service-one-card">
                    <div className="service-one-icon">
                        <Link to="#">
                        <i className="flaticon-public-transport-1" />
                        </Link>
                    </div>
                    
                    <div className="service-one-card-content">
                        <h4>
                        <Link to="#">Urban Village Initiative (UVI)</Link>
                        </h4>
                        <p>Community-driven housing model focused on equity, ownership, and sustainability</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="service-one-card">
                    <div className="service-one-icon">
                        <Link to="#">
                        <i className="flaticon-agriculture" />
                        </Link>
                    </div>
                    
                    <div className="service-one-card-content">
                        <h4>
                        <Link to="#">GHI – Uniting Technology
</Link>
                        </h4>
                        <p>Bridging innovation and people to build resilient, inclusive housing solutions</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="service-one-card">
                    <div className="service-one-icon">
                        <Link to="#">
                        <i className="flaticon-factory" />
                        </Link>
                    </div>
                    
                    <div className="service-one-card-content">
                        <h4>
                        <Link to="#">Business &amp; Industry</Link>
                        </h4>
                        <p>When nothing prevents our being able to we like best every.</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="service-one-card">
                    <div className="service-one-icon">
                        <Link to="#">
                        <i className="flaticon-businessman" />
                        </Link>
                    </div>
                    
                    <div className="service-one-card-content">
                        <h4>
                        <Link to="#">Jobs &amp; Unemployment</Link>
                        </h4>
                        <p>When nothing prevents our being able to we like best every.</p>
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="service-one-card">
                    <div className="service-one-icon">
                        <Link to="#">
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

        <section className="service-section">
        <div className="container">
          <div className="row justify-content-between">

            <div className="col-lg-5">
              <div className="about-image">
                <div className="about-image-inner img-one">
                  <img src={Gallery01} className="img-fluid" alt="img-2" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="section-title-box">
                <div className="section-tagline">Why We're Different</div>

                <h2 className="section-title text-white">
                  Manufacturing for Scalable Impact
                </h2>
                <div className="section-text">
                  <p>
                    At the Global Housing Initiative and NeoPOLYGON Technology,
                    we are establishing our in-house steel fabrication system to
                    produce all core components of the PolyFRAME structural
                    system. This includes beams, columns, and connection members
                    made from 8-gauge steel, utilizing advanced CNC press brakes
                    and precision cutting technology.
                  </p>
                  <p>
                    Most importantly, the system is fully scalable and can be
                    installed locally, allowing us to launch projects within
                    California and across the globe with complete control over
                    quality, cost, and speed.
                  </p>
                  <p>
                    This capability is central to our vision: delivering resilient, affordable housing through a globally replicable model that starts with smart, localized manufacturing.
                  </p>
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