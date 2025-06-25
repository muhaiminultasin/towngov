import React from 'react'
import { Link } from 'react-router-dom'
import Blog01 from "../../../assets/image/Future.jpeg";
import Blog02 from "../../../assets/image/CommunityInvestment.png";
import Blog03 from "../../../assets/image/GHI’s.jpg"
import Blog04 from '../../../assets/image/blog/blog-4.jpg'
import Blog05 from '../../../assets/image/blog/blog-5.jpg'
import Blog06 from '../../../assets/image/blog/blog-6.jpg'


function First() {
  return (
    <>
        <section className="blog-section blog-section-two">
            <div className="container">
                <div className="row row-gutter-y-155">

                <div className="col-lg-6 col-xl-4">
                   <div className="blog-card">
                <div className="blog-card-image">
                  <img src={Blog01} className="img-fluid" alt="img-22" />
                  <Link to="/the-future-of-housing"> </Link>
                </div>

                <div className="blog-card-date">
                  <Link to="/the-future-of-housing">28SEP</Link>
                </div>

                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="author">
                      by<Link to="/the-future-of-housing">Admin</Link>
                    </span>

                    <span className="comment">
                      <Link to="/the-future-of-housing">02 Comments</Link>
                    </span>
                  </div>

                  <h4>
                    <Link to="/the-future-of-housing">
                      The Future of Housing: How Modular Engineering is Changing
                      the Game
                    </Link>
                  </h4>
                  <p>
                    Tellus amet vel nisi, vel felis morbi sit et. Risus,
                    pulvinar ultricie
                  </p>
                </div>
              </div>
                   
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="blog-card">
                <div className="blog-card-image">
                  <img src={Blog02} className="img-fluid" alt="img-23" />
                  <Link to="/why-comminity-investment-is-the-key" />
                </div>

                <div className="blog-card-date">
                  <Link to="/why-comminity-investment-is-the-key">28SEP</Link>
                </div>

                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="author">
                      by<Link to="/why-comminity-investment-is-the-key">Admin</Link>
                    </span>

                    <span className="comment">
                      <Link to="/why-comminity-investment-is-the-key">02 Comments</Link>
                    </span>
                  </div>

                  <h4>
                    <Link to="/why-comminity-investment-is-the-key">
                      {" "}
                      Why Community Investment is the Key to Affordable Housing{" "}
                    </Link>
                  </h4>
                  <p>
                    Tellus amet vel nisi, vel felis morbi sit et. Risus,
                    pulvinar ultricie
                  </p>
                </div>
              </div>
                   
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="blog-card">
                <div className="blog-card-image">
                  <img src={Blog03} className="img-fluid" alt="img-24" />
                  <Link to="/why-comminity-investment-is-the-key" />
                </div>

                <div className="blog-card-date">
                  <Link to="/upcoming-cities-and-projects">28SEP</Link>
                </div>

                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="author">
                      by<Link to="/upcoming-cities-and-projects">Admin</Link>
                    </span>

                    <span className="comment">
                      <Link to="/upcoming-cities-and-projects">02 Comments</Link>
                    </span>
                  </div>

                  <h4>
                    <Link to="/upcoming-cities-and-projects">
                      GHI’s Expansion: Upcoming Cities and Projects
                    </Link>
                  </h4>
                  <p>
                    Tellus amet vel nisi, vel felis morbi sit et. Risus,
                    pulvinar ultricie
                  </p>
                </div>
              </div>
                   
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="blog-card">
                    <div className="blog-card-image">
                        <img src={Blog04} className="img-fluid" alt="img-187" />
                        <Link to="/newsdetails" />
                    </div>
                    
                    <div className="blog-card-date">
                        <Link to="/newsdetails">28SEP</Link>
                    </div>
                   
                    <div className="blog-card-content">
                        <div className="blog-card-meta">
                        <span className="author">
                            by<Link to="/newsdetails">Admin</Link>
                        </span>
                       
                        <span className="comment">
                            <Link to="/newsdetails">02 Comments</Link>
                        </span>
                        
                        </div>
                       
                        <h4>
                        <Link to="/newsdetails">
                            Shopping Gathering Plan for the 2021 Holiday Season
                        </Link>
                        </h4>
                        <p>
                        Tellus amet vel nisi, vel felis morbi sit et. Risus, pulvinar
                        ultricie
                        </p>
                    </div>
                    
                    </div>
                   
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="blog-card">
                    <div className="blog-card-image">
                        <img src={Blog05} className="img-fluid" alt="img-188" />
                        <Link to="/newsdetails" />
                    </div>
                    
                    <div className="blog-card-date">
                        <Link to="/newsdetails">28SEP</Link>
                    </div>
                   
                    <div className="blog-card-content">
                        <div className="blog-card-meta">
                        <span className="author">
                            by<Link to="/newsdetails">Admin</Link>
                        </span>
                       
                        <span className="comment">
                            <Link to="/newsdetails">02 Comments</Link>
                        </span>
                        
                        </div>
                       
                        <h4>
                        <Link to="/newsdetails">
                            Connected Justice and the rapid change in technology
                        </Link>
                        </h4>
                        <p>
                        Tellus amet vel nisi, vel felis morbi sit et. Risus, pulvinar
                        ultricie
                        </p>
                    </div>
                    
                    </div>
                   
                </div>
                
                <div className="col-lg-6 col-xl-4">
                    <div className="blog-card">
                    <div className="blog-card-image">
                        <img src={Blog06} className="img-fluid" alt="img-189" />
                        <Link to="/newsdetails" />
                    </div>
                    
                    <div className="blog-card-date">
                        <Link to="/newsdetails">28SEP</Link>
                    </div>
                   
                    <div className="blog-card-content">
                        <div className="blog-card-meta">
                        <span className="author">
                            by<Link to="/newsdetails">Admin</Link>
                        </span>
                       
                        <span className="comment">
                            <Link to="/newsdetails">02 Comments</Link>
                        </span>
                        
                        </div>
                       
                        <h4>
                        <Link to="/newsdetails">
                            Spotlight on USA: Reinventing Government
                        </Link>
                        </h4>
                        <p>
                        Tellus amet vel nisi, vel felis morbi sit et. Risus, pulvinar
                        ultricie
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