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
                  <li className="active has-dropdown">
                    <Link to="/">Home</Link>
                    <ul className="list-unstyled drop-down-custom-width">
                      <li className="link-parent">
                        <Link to="/">
                          Hero
                          <p className="submenutext">
                            Building Sustainable Housing For a Better Future
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          Mission Statement
                          <p className="submenutext">
                            Building Sustainable Housing For a Better Future
                          </p>
                        </Link>
                      </li>
                      <li className="has-dropdown">
                        <Link to="#">
                          Learn More About Our Vision
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                        
                        <ul className="list-unstyled ">
                          <li>
                            <Link to="#">About Us</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link to="#">
                          Join The Initiative
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                        <ul className="list-unstyled">
                          <li>
                            <Link to="#">Get Involved</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <Link to="#">
                          Support Our Mission
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                        <ul className="list-unstyled">
                          <li>
                            <Link to="#">Support Us</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown ">
                    <Link to="/about">About Us</Link>
                    <ul className="list-unstyled drop-down-custom-width">
                      <li>
                        <Link to="#">
                          Our Story
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Our Approach (NPT + UVI)</Link>
                      </li>
                      <li>
                        <Link to="/team">
                          Leadership & Team
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <Link to="#">Our Model</Link>
                    <ul className="list-unstyled drop-down-custom-width">
                      <li>
                        <Link to="#">
                          Overview
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Ghi: Nonprofit Coordination & Strategy
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Npt: Structural System Provider
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Uvi: Community Development & Investment
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Diagram
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <Link to="#">Our Solutions</Link>
                    <ul className="list-unstyled drop-down-custom-width">
                      <li>
                        <Link to="#">
                          Affordable Housing Development
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          PolyFRAME Building System
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Sustainable Urban Villages
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          City & Government Partnerships
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <Link to="#">Get Involved</Link>
                    <ul className="list-unstyled drop-down-custom-width">
                      <li>
                        <Link to="#">
                          For Investors & Donors
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          For Developers & Builders
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          For Local Communities
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Volunteer & Careers
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <Link to="#">News & Insights</Link>
                    <ul className="list-unstyled drop-down-custom-width">
                      <li>
                        <Link to="#">
                          Latest Updates
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Blog
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Media Coverage
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <Link to="#">Support Us</Link>
                    <ul className="list-unstyled drop-down-custom-width">
                      <li>
                        <Link to="/donate">
                          Donate
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Investment Opportunities
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Sponsor a Village
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <Link to="#">Contact</Link>
                    <ul className="list-unstyled drop-down-custom-width">
                      <li>
                        <Link to="/contact">Contact Form</Link>
                      </li>
                      <li>
                        <Link to="#">
                          Investment/Partnership Inquiry
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Sponsor a Village
                          <p className="submenutext">
                            There are many variations of passages of Lorem Ipsum
                            available
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="home/#/cta-two-section">
                          Newsletter Signup
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <Link to="#">FAQ</Link>
                    <ul className="list-unstyled drop-down-custom-width">
                      <li>
                        <Link to="#">What Makes GHI Different? </Link>
                      </li>
                      <li>
                        <Link to="#">
                          What’s Unique About PolyFRAME?
                        </Link>
                      </li>
                      <li>
                    <Link to="#">
                          How to Invest or Join UVI?
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Steps to Partner With GHI?
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* <li>
                    <Link to="/contact">Contact</Link>
                  </li> */}
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
                {/*  Home section */}
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
                        <p className="mblsubtext">
                          Building Sustainable Housing for a Better Future
                        </p>
                      </li>
                      <li>
                        <Link to="/hometwo">Mission Statement</Link>
                      </li>
                      {/* CTA in one line*/}
                      <div className="CTA">
                        <li>
                          <Link to="/hometwo">
                            <button className="btn-primary-mobile">
                              About Us
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/hometwo">
                            <button className="btn-primary-mobile">
                              Get Involved
                            </button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/hometwo">
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
                <li className="has-dropdown">
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
                        <Link to="">Our Story</Link>
                      </li>
                      <li>
                        <Link to="">Our Approach (NPT + UVI)</Link>
                      </li>
                      <li>
                        <Link to="/team">Leadership & Team</Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* OUR MODEL section */}
                <li className="has-dropdown">
                  <Link to="#">
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
                        <Link to="/services">Overview</Link>
                      </li>
                      <li>
                        <Link to="/servicedetails" className="Link">
                          GHI: Nonprofit Coordination & Strategy
                        </Link>
                      </li>
                      <li>
                        <Link to="/servicedetails" className="">
                          NPT: Structural System Provider
                        </Link>
                      </li>
                      <li>
                        <Link to="/servicedetails" className="Link">
                          UVI: Community Development & Investment
                        </Link>
                      </li>
                      <li>
                        <Link to="/servicedetails" className="Link">
                          Diagram or Flow Link
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="has-dropdown">
                  <Link to="#">
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
                        <Link to="/departments" className="Link">
                          Affordable Housing Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/departmentdetails">
                          PolyFRAME Building System
                        </Link>
                      </li>
                      <li>
                        <Link to="/departmentdetails">
                          Sustainable Urban Villages
                        </Link>
                      </li>
                      <li>
                        <Link to="/departmentdetails">
                          City & Government Partnerships
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* GET INVOLVED section */}
                <li className="has-dropdown">
                  <Link to="#">
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

                <li className="has-dropdown">
                  <Link to="#">
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
                        <Link to="/newsdetails">Blog</Link>
                      </li>
                      <li>
                        <Link to="/newsdetails">Media Coverage</Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* NEWS & INSIGHTS section */}
                <li className="has-dropdown">
                  <Link to="#">
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
                        <Link to="/newsdetails">Investment Opportunities</Link>
                      </li>
                      <li>
                        <Link to="/newsdetails">Sponsor a Village</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="has-dropdown">
                  <Link to="#">
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
                        <Link to="/newsdetails">
                          Investment/Partnership Inquiry
                        </Link>
                      </li>
                      <li>
                        <Link to="/newsdetails">Newsletter Signup</Link>
                      </li>
                    </ul>
                  )}
                </li>
                {/* FAQ section */}
                <li className="has-dropdown">
                  <Link to="#">
                    FAQ
                    <button className={faq ? "expanded" : ""}>
                      <i
                        className="fa-solid fa-chevron-right"
                        onClick={() => {
                          setfaq(!faq);
                        }}
                      />
                    </button>
                  </Link>
                  {faq && (
                    <ul className="list-unstyled" style={{ display: "block" }}>
                      <li>
                        <Link to="/contact">What Makes GHI Different?</Link>
                      </li>
                      <li>
                        <Link to="/newsdetails">
                          What’s Unique About PolyFRAME?
                        </Link>
                      </li>
                      <li>
                        <Link to="/newsdetails">
                          How to Invest or Join UVI?
                        </Link>
                      </li>
                      <li>
                        <Link to="/newsdetails">
                          Steps to Partner With GHI?
                        </Link>
                      </li>
                    </ul>
                  )}
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
