import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/image/logo.png'

function Main() {
  return (
    <>
        <section className="footer">
            <div className="footer-inner">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                    <div className="footer-widget-logo">
                        <Link to="/">
                          <img src={Logo} className="img-fluid" alt="img-25" />
                        </Link>
                    </div>
                    
                    <div className="footer-widget-text">
                        <p>
                        The gowrnx official guide to living, working, visiting and
                        investing in the Texas
                        </p>
                    </div>
                   
                    <div className="footer-widget-socials">
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
                   
                    <div className="col-lg-3">
                    <div className="footer-widget">
                        <div className="footer-widget-explore">
                        <h4 className="footer-widget-title">Explore</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/departmentdetails">Administration</Link>
                            </li>
                            <li>
                                <Link to="/servicedetails">Fire Services</Link>
                            </li>
                            <li>
                                <Link to="/eventdetails">Business &amp; Taxation</Link>
                            </li>
                            <li>
                                <Link to="/teamdetails">Circular’s And Go’s</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        
                        </div>
                        
                    </div>
                    
                    </div>
                    
                    <div className="col-lg-2">
                    <div className="footer-widget">
                        <div className="footer-widget-department">
                        <h4 className="footer-widget-title">Departments</h4>
                        <ul className="list-unstyled">
                            <li>
                            <Link to="/departmentdetails">Health &amp; Safety</Link>
                            </li>
                            <li>
                            <Link to="/departmentdetails">Housing &amp; Land</Link>
                            </li>
                            <li>
                            <Link to="/departmentdetails">Legal &amp; Finance</Link>
                            </li>
                            <li>
                            <Link to="/departmentdetails">Transport &amp; Traffic</Link>
                            </li>
                            <li>
                            <Link to="/departmentdetails">Arts &amp; Culture</Link>
                            </li>
                        </ul>
                        
                        </div>
                        
                    </div>
                    
                    </div>
                    
                    <div className="col-lg-3">
                    <div className="footer-widget">
                        <div className="footer-widget-contact">
                        <h4 className="footer-widget-title">Contact</h4>
                        <p>
                            88 Broklyn Golden Road Street,
                            <br />
                            New York. USA
                        </p>
                        </div>
                       
                        <div className="footer-widget-contact-list">
                        <i className="fa-solid fa-envelope" />
                        <div className="footer-widget-contact-item">
                            <Link to="mailto:needhelp@company.com">needhelp@company.com</Link>
                        </div>
                        
                        </div>
                        
                        <div className="footer-widget-contact-list">
                        <i className="fa-solid fa-phone" />
                        <div className="footer-widget-contact-item">
                            <Link to="tel:+92-003-68-090">+92 (003) 68-090</Link>
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                
            </div>
            <div className="bottom-footer">
                <div className="conatiner">

                    <p>© Copyright 2025 by globalhousinginitiative.com </p>

                </div>
                
            </div>
        </section>
    </>
  )
}

export default Main