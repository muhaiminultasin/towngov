import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/image/logo.jpg'

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
                        Empowering communities through innovative, resilient housing solutions that blend technology, sustainability, and social impact worldwide.
                        </p>
                    </div>
                   
                    <div className="footer-widget-socials">
                        <a href="https://twitter.com/" target='_blank'>
                            <i className="fa-brands fa-twitter" />
                        </a>
                        <a href="https://www.facebook.com/" target='_blank'>
                            <i className="fa-brands fa-facebook" />
                        </a>
                        <a href="https://www.instagram.com/" target='_blank'>
                            <i className="fa-brands fa-instagram" />
                        </a>
                        <a href="https://www.linkedin.com/in/fraidoon-faridnia-082343a0" target="_blank">
                            <i className="fa-brands fa-linkedin" />
                        </a>
                    </div>
                   
                    </div>
                   
                    <div className="col-lg-3">
                    <div className="footer-widget">
                        <div className="footer-widget-explore">
                        <h4 className="footer-widget-title">Explore</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/solutions">Our Solutions</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">Projects</Link>
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
                        <h4 className="footer-widget-title">Resources</h4>
                        <ul className="list-unstyled">
                            <li>
                            <Link to="/get-involved">Get Involved</Link>
                            </li>
                            <li>
                            <Link to="/news">Blog</Link>
                            </li>
                            <li>
                            <Link to="/faq">FAQ</Link>
                            </li>
                            <li>
                            <Link to="/policy">Privacy Policy</Link>
                            </li>
                            <li>
                            <Link to="/terms">Terms & Conditions</Link>
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
                            California, United States
                        </p>
                        </div>
                       
                        <div className="footer-widget-contact-list">
                        <i className="fa-solid fa-envelope" />
                        <div className="footer-widget-contact-item">
                            <Link to="mailto:info@ghi.com">info@ghi.com</Link>
                        </div>
                        
                        </div>
                        
                        <div className="footer-widget-contact-list">
                        <i className="fa-solid fa-phone" />
                        <div className="footer-widget-contact-item">
                            <Link to="tel:00000000">00000000</Link>
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                
            </div>
            <div className="bottom-footer">
                <div className="conatiner">

                    <p>© Copyright 2025 by Global Housing Initiative </p>

                </div>
                
            </div>
        </section>
    </>
  )
}

export default Main