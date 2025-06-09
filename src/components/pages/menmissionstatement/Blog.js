import React from 'react'
import { Link } from 'react-router-dom'
import Blog01 from '../../../assets/image/blog/blog-1.jpg'
import Blog02 from '../../../assets/image/blog/blog-2.jpg'
import Blog03 from '../../../assets/image/blog/blog-3.jpg'

function Blog() {
  return (
    <>
        <section className="blog-section">
            <div className="container">
                <div className="blog-box">
                <div className="section-title-box text-center">
                    <div className="section-tagline">DIRECT FROM THE BLOG POSTS</div>
                    <h2 className="section-title">Checkout Latest News <br /> and Articles </h2>
                </div>
                </div>
                <div className="row row-gutter-y-155">
                <div className="col-lg-4">
                    <div className="blog-card">
                    <div className="blog-card-image">
                        <img src={Blog01} className="img-fluid" alt="img-22" />
                        <Link to="/newsdetails" > </Link>
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
                            Supporting local business to bounce back
                        </Link>
                        </h4>
                        <p>
                        Tellus amet vel nisi, vel felis morbi sit et. Risus, pulvinar
                        ultricie
                        </p>
                    </div>
                  
                    </div>
                    
                </div>
               
                <div className="col-lg-4">
                    <div className="blog-card">
                    <div className="blog-card-image">
                        <img src={Blog02} className="img-fluid" alt="img-23" />
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
                        <Link to="/newsdetails"> Resilience for TownGov Green Project </Link>
                        </h4>
                        <p>
                        Tellus amet vel nisi, vel felis morbi sit et. Risus, pulvinar
                        ultricie
                        </p>
                    </div>
                  
                    </div>
                    
                </div>
               
                <div className="col-lg-4">
                    <div className="blog-card">
                    <div className="blog-card-image">
                        <img src={Blog03} className="img-fluid" alt="img-24" />
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
                            Save soil and save world project in 2022
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

export default Blog