import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.png";

function Main() {
  const [Btnshow, setBtnshow] = useState(false);
  const [search, setsearch] = useState(false);
  const [Home, setHome] = useState(false);
  const [Pages, setPages] = useState(false);
  const [Services, setServices] = useState(false);
  const [News, setNews] = useState(false);
  const [Departments, setDepartments] = useState(false);
  const [Events, setEvents] = useState(false);
  const [Support, setSupport] = useState(false);
  const [Contact, setContact] = useState(false);
  const [faq, setfaq] = useState(false);

  return (
    <>
      <header className="header">
        <div className="topbar">
          <div className="topbar-inner">
            <div className="topbar-left">
              <div className="topbar-socials">
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-pinterest-p" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
              </div>

              <div className="topbar-info">
                <ul>
                  <li>
                    <div className="topbar-icon">
                      <i className="fa-solid fa-envelope" />
                    </div>

                    <div className="topbar-text">
                      <Link to="mailto:needhelp@company.com">
                        needhelp@company.com
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="topbar-icon">
                      <i className="fa-solid fa-clock" />
                    </div>

                    <div className="topbar-text">
                      <span>Open Hours: Mon - Fri 8.00 am - 6.00 pm</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="topbar-right">
              <ul>
                <li>
                  <Link to="">Council</Link>
                </li>
                <li>
                  <Link to="">Government</Link>
                </li>
                <li>
                  <Link to="">Complaints</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-menu sticky-header">
          <div className="main-menu-inner">
            <div className="main-menu-left">
              <div className="main-menu-logo">
                <Link to="/">
                  <img src={Logo} alt="img-1" width={140} />
                </Link>
              </div>

              <div className="navigation">
                <ul className="main-menu-list list-unstyled">
                  <li className="active  ">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="     ">
                    <Link to="/about">About Us</Link>
                    
                  </li>

                  

                  <li className=" ">
                    <Link to="/services">Our Solutions</Link>
                  
                  </li>
                  <li className=" ">
                    <Link to="/portfolio">Projects</Link>
                  
                  </li>

                  <li className=" ">
                    <Link to="/get-involved">Get Involved</Link>
                    
                  </li>

                  <li className="">
                    <Link to="/contact">Contact</Link>
                    
                  </li>

                  <li className="">
                    <Link to="/faq">FAQ</Link>
                  </li>

                  
                </ul>
              </div>
            </div>

            <div className="main-menu-right">
              <div
                className="mobile-menu-button mobile-nav-toggler"
                onClick={() => {
                  setBtnshow(true);
                }}
              >
                <span />
                <span />
                <span />
              </div>

              <div className="search-box">
                <Link
                  to="#"
                  className="search-toggler"
                  onClick={() => {
                    setsearch(true);
                  }}
                >
                  <i className="flaticon-search-interface-symbol" />
                </Link>
              </div>

              <div className="main-menu-right-button">
                <Link to="/donate" className="btn btn-primary">
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {Btnshow && (
        <div className="mobile-nav-wrapper expanded">
          <div className="mobile-nav-overlay mobile-nav-toggler" />
          <div className="mobile-nav-content">
            <a
              href="#"
              className="mobile-nav-close mobile-nav-toggler"
              onClick={() => setBtnshow(false)}
            >
              <span />
              <span />
            </a>

            <div className="logo-box">
              <Link to="/">
                <img
                  src="assets/image/logo-light.png"
                  width={160}
                  height={40}
                  alt={26}
                />
              </Link>
            </div>
            {/* mobile nav */}
            <div className="mobile-nav-container">
              <ul className="main-menu-list list-unstyled">
                {/* Home section */}
                <li className="active  ">
                  <Link to="/home">
                    Home
                    <button
                      className={Home ? "expanded" : ""}
                      onClick={() => {
                        setHome(!Home);
                      }}
                    >
                      <i className="fa-solid fa-chevron-right" />
                    </button>
                  </Link>

                  {Home && (
                    <ul className="list-unstyled" style={{ display: "block" }}>
                      <li>
                        <Link to="/">Hero</Link>
                        <p className="mblsubtext">
                          Building Sustainable Housing for a Better Future
                        </p>
                      </li>
                      <li>
                        <Link to="/about">Mission Statement</Link>
                      </li>
                      {/* CTA in one line*/}
                      <div className="CTA">
                        <li>
                          <Link to="/about">
                            <button className="btn-primary-mobile">
                              About Us
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact">
                            <button className="btn-primary-mobile">
                              Get Involved
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/supportus">
                            <button className="btn-primary-mobile">
                              Support Us
                            </button>
                          </Link>
                        </li>
                      </div>
                    </ul>
                  )}
                </li>

                {/* ABOUT US section */}
                <li className=" ">
                  <Link to="/about">
                    About Us
                    <button className={Pages ? "expanded" : ""}>
                      <i
                        className="fa-solid fa-chevron-right"
                        onClick={() => {
                          setPages(!Pages);
                        }}
                      />
                    </button>
                  </Link>
                  {Pages && (
                    <ul className="list-unstyled" style={{ display: "block" }}>
                      <li>
                        <Link to="/about#our-story">Our Story</Link>
                      </li>
                      <li>
                        <Link to="/about#GHIApproach">
                          Our Approach (NPT + UVI)
                        </Link>
                      </li>
                      <li>
                        <Link to="/team">Leadership & Team</Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* OUR MODEL section */}
                <li className=" ">
                  <Link to="/ourmodel">
                    Our Model
                    <button className={Services ? "expanded" : ""}>
                      <i
                        className="fa-solid fa-chevron-right"
                        onClick={() => {
                          setServices(!Services);
                        }}
                      />
                    </button>
                  </Link>

                  {Services && (
                    <ul className="list-unstyled" style={{ display: "block" }}>
                      <li>
                        <Link to="/ourmodel">Overview</Link>
                      </li>
                      <li>
                        <Link to="/servicedetails">
                          GHI: Nonprofit Coordination & Strategy
                        </Link>
                      </li>
                      <li>
                        <Link to="/servicedetails">
                          NPT: Structural System Provider
                        </Link>
                      </li>
                      <li>
                        <Link to="/servicedetails">
                          UVI: Community Development & Investment
                        </Link>
                      </li>
                      <li>
                        <Link to="/servicedetails">Diagram or Flow Link</Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className=" ">
                  <Link to="/services">
                    Our Solutions
                    <button className={Departments ? "expanded" : ""}>
                      <i
                        className="fa-solid fa-chevron-right"
                        onClick={() => {
                          setDepartments(!Departments);
                        }}
                      />
                    </button>
                  </Link>

                  {Departments && (
                    <ul className="list-unstyled" style={{ display: "block" }}>
                      <li>
                        <Link to="/services">
                          Affordable Housing Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/services">PolyFRAME Building System</Link>
                      </li>
                      <li>
                        <Link to="/services">Sustainable Urban Villages</Link>
                      </li>
                      <li>
                        <Link to="/services">
                          City & Government Partnerships
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* GET INVOLVED section */}
                <li className=" ">
                  <Link to="/getinvolved">
                    Get Involved
                    <button className={Events ? "expanded" : ""}>
                      <i
                        className="fa-solid fa-chevron-right"
                        onClick={() => {
                          setEvents(!Events);
                        }}
                      />
                    </button>
                  </Link>

                  {Events && (
                    <ul className="list-unstyled" style={{ display: "block" }}>
                      <li>
                        <Link to="/events">For Investors & Donors</Link>
                      </li>
                      <li>
                        <Link to="/eventdetails">
                          For Developers & Builders
                        </Link>
                      </li>
                      <li>
                        <Link to="/eventdetails">For Local Communities</Link>
                      </li>
                      <li>
                        <Link to="/eventdetails">Volunteer & Careers</Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className=" ">
                  <Link to="/news">
                    News & Insights
                    <button className={News ? "expanded" : ""}>
                      <i
                        className="fa-solid fa-chevron-right"
                        onClick={() => {
                          setNews(!News);
                        }}
                      />
                    </button>
                  </Link>
                  {News && (
                    <ul className="list-unstyled" style={{ display: "block" }}>
                      <li>
                        <Link to="/news">Latest Updates</Link>
                      </li>
                      <li>
                        <Link to="/news">Blog</Link>
                      </li>
                      <li>
                        <Link to="/news">Media Coverage</Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* NEWS & INSIGHTS section */}
                <li className=" ">
                  <Link to="/supportus">
                    Support Us
                    <button className={Support ? "expanded" : ""}>
                      <i
                        className="fa-solid fa-chevron-right"
                        onClick={() => {
                          setSupport(!Support);
                        }}
                      />
                    </button>
                  </Link>
                  {Support && (
                    <ul className="list-unstyled" style={{ display: "block" }}>
                      <li>
                        <Link to="/donate">Donate</Link>
                      </li>
                      <li>
                        <Link to="/contact">Investment Opportunities</Link>
                      </li>
                      <li>
                        <Link to="/contact">Sponsor a Village</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className=" ">
                  <Link to="/contact">
                    Contact
                    <button className={Contact ? "expanded" : ""}>
                      <i
                        className="fa-solid fa-chevron-right"
                        onClick={() => {
                          setContact(!Contact);
                        }}
                      />
                    </button>
                  </Link>
                  {Contact && (
                    <ul className="list-unstyled" style={{ display: "block" }}>
                      <li>
                        <Link to="/contact">Contact Form</Link>
                      </li>
                      <li>
                        <Link to="/contact">
                          Investment/Partnership Inquiry
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact#newslatter">Newsletter Signup</Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* FAQ section */}
                <li className=" ">
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>

            <ul className="mobile-nav-contact list-unstyled">
              <li>
                <i className="fa-solid fa-phone" />
                <a href="tel:+8898006802">+ 88 ( 9800 ) 6802</a>
              </li>

              <li>
                <i className="fa-solid fa-envelope" />
                <a href="mailto:needhelp@company.com">needhelp@company.com</a>
              </li>

              <li>
                <i className="fa-solid fa-map-marker-alt" />
                88 Broklyn Golden Road Street <br /> New York. USA
              </li>
            </ul>

            <ul className="mobile-nav-social list-unstyled">
              <li>
                <a href="https://twitter.com/">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://in.pinterest.com/">
                  <i className="fa-brands fa-pinterest-p" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {search && (
        <div
          className="search-popup active"
          onClick={() => {
            setsearch(false);
          }}
        >
          <div className="search-popup-overlay search-toggler" />
          <div className="search-popup-content">
            <form action="#">
              <label htmlFor="search" className="sr-only">
                search here
              </label>

              <input type="text" id="search" placeholder="Search Here..." />
              <button
                type="submit"
                aria-label="search submit"
                className="search-btn"
              >
                <span>
                  <i className="flaticon-search-interface-symbol" />
                </span>
              </button>
            </form>
          </div>
        </div>
      )}

      <a href="#" className="scroll-to-top scroll-to-target" data-target="html">
        <i className="fa-solid fa-arrow-up" />
      </a>
    </>
  );
}

export default Main;
