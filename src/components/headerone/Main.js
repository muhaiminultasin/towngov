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

  return (
    <>
      <header className="header">
        <div className="topbar">
          <div className="topbar-inner">
            <div className="topbar-left">
              <div className="topbar-socials">
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
                  <Link to="/departmentdetails">Council</Link>
                </li>
                <li>
                  <Link to="/departments">Government</Link>
                </li>
                <li>
                  <Link to="/contact">Complaints</Link>
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
                  <li className="active has-dropdown">
                    <Link to="/">Home</Link>
                    <ul className="list-unstyled drop-down-custom-width">
                      <li>
                        <Link to="/">
                        Hero
                        <p className="submenutext">Building Sustainable Housing For a Better Future</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                        Mission Statement
                        <p className="submenutext">We are committed to redefining housing through sustainable design, community-driven development, and inclusive growth.</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/our-story">
                        <button className="btn-primary custom-width-button">About Us</button>
                        </Link>
                        <Link to="/our-story">
                        <button className="btn-primary custom-width-button">Get Involved </button>
                        </Link>
                        <Link to="/our-story">
                        <button className="btn-primary custom-width-button">Support Us </button>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <Link to="#">ABOUT US</Link>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/about">Our Story</Link>
                      </li>
                      <li>
                        <Link to="/team">Our Approach (NPT + UVI)</Link>
                      </li>
                      <li>
                        <Link to="/teamdetails">Leadership & Team</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <Link to="#">OUR MODEL</Link>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/services">Overview</Link>
                      </li>
                      <li>
                        <Link to="/servicedetails">GHI: Nonprofit coordination & strategy</Link>
                      </li>
                      <li>
                        <Link to="/servicedetails">NPT: Structural system provider</Link>
                      </li>
                      <li>
                        <Link to="/servicedetails">UVI: Community development & investment</Link>
                      </li>
                      <li>
                        <Link to="/servicedetails">➤ Diagram or Flow Link (add placeholder now)</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <Link to="#">OUR SOLUTIONS</Link>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/departments">Affordable Housing Development</Link>
                      </li>
                      <li>
                        <Link to="/departmentdetails">PolyFRAME Building System</Link>
                      </li>
                      <li>
                        <Link to="/departmentdetails">Sustainable Urban Villages</Link>
                      </li>
                      <li>
                        <Link to="/departmentdetails">City & Government Partnerships</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <Link to="#">GET INVOLVED</Link>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/events">For Investors & Donors</Link>
                      </li>
                      <li>
                        <Link to="/eventdetails">For Developers & Builders</Link>
                      </li>
                      <li>
                        <Link to="/eventdetails">For Local Communities</Link>
                      </li>
                      <li>
                        <Link to="/eventdetails">Volunteer & Careers</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <Link to="#">NEWS & INSIGHTS</Link>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/news">Latest Updates</Link>
                      </li>
                      <li>
                        <Link to="/newsdetails">Blog</Link>
                      </li>
                      <li>
                        <Link to="/newsdetails">Media Coverage</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/contact">Contact</Link>
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
                <Link to="/contact" className="btn btn-primary">
                  Report Issue
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

            <div className="mobile-nav-container">
              <ul className="main-menu-list list-unstyled">
                <li className="active has-dropdown">
                  <Link to="#">
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
                        {/* submenu */}
                        {Home && (
                          <ul
                            className="list-unstyled"
                            style={{ display: "block" }}
                          >
                            <li>
                              <Link to="/" className="cuscolformbl">
                                Example 1
                                <p className="mblsubtext">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                                </p>
                              </Link>
                              {/* submenu */}
                            </li>
                            <li>
                              <Link to="/" className="cuscolformbl">
                                Example 2
                                <p className="mblsubtext">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                                </p>
                              </Link>
                            </li>
                          </ul>
                        )}
                        {/* submenu */}
                      </li>
                      <li>
                        <Link to="/hometwo">Home 2</Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="has-dropdown">
                  <Link to="#">
                    Pages
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
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/team">Team</Link>
                      </li>
                      <li>
                        <Link to="/teamdetails">Team Details</Link>
                      </li>
                      <li>
                        <Link to="/portfolio">Portfolio</Link>
                      </li>
                      <li>
                        <Link to="/portfoliodeatils">Portfolio Details</Link>
                      </li>
                      <li>
                        <Link to="/causes">Causes</Link>
                      </li>
                      <li>
                        <Link to="/causedetails">Cause Details</Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="has-dropdown">
                  <Link to="#">
                    Services
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
                        <Link to="/services">Services</Link>
                      </li>
                      <li>
                        <Link to="/servicedetails">Service Details</Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="has-dropdown">
                  <Link to="#">
                    Departments
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
                        <Link to="/departments">Departments</Link>
                      </li>
                      <li>
                        <Link to="/departmentdetails">Department Details</Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="has-dropdown">
                  <Link to="#">
                    Events
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
                        <Link to="/events">Events</Link>
                      </li>
                      <li>
                        <Link to="/eventdetails">Event Details</Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="has-dropdown">
                  <Link to="#">
                    News
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
                        <Link to="/news">News</Link>
                      </li>
                      <li>
                        <Link to="/newsdetails">News Details</Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
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
