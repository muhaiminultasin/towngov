import React from "react";
import { Link } from "react-router-dom";
import Blogdeatils01 from "../../../../assets/image/GHIs.jpg";
import Blogdeatils02 from "../../../../assets/image/blog/blog-details-2.jpg";
import Blogdeatils03 from "../../../../assets/image/blog/blog-details-3.jpg";
import Blogdeatils04 from "../../../../assets/image/blog/blog-details-4.jpg";
import Blogdeatils05 from "../../../../assets/image/blog/blog-details-5.jpg";
import Blogdeatils06 from "../../../../assets/image/blog/blog-details-6.jpg";
import Blogdeatils07 from "../../../../assets/image/blog/blog-details-7.jpg";

function First() {
  return (
    <>
      <section className="news-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="news-details-box-image">
                <div className="news-details-box-image-inner">
                  <img
                    src={Blogdeatils01}
                    className="img-fluid"
                    alt="img-193"
                  />
                  <Link to="/upcoming-cities-and-projects" className="news-details-box-date">
                    {" "}
                    28 SEP{" "}
                  </Link>
                </div>
              </div>

              <div className="news-details-meta-box">
                <div className="news-details-meta-box-inner">
                  <span className="author">
                    {" "}
                    by<Link to="/upcoming-cities-and-projects">Admin</Link>{" "}
                  </span>

                  <span className="comment">
                    <Link to="/upcoming-cities-and-projects">02 Comments</Link>
                  </span>
                </div>
              </div>

              <div className="news-details-content-box">
                <h4>The Future of Housing: How Modular Engineering is Changing the Game</h4>
                <p>
               GHI is growing rapidly, with exciting plans to bring its mission of affordable and sustainable housing to more cities. As part of our expansion, we're launching new projects in key urban areas to meet rising demand and serve more families. Each development is thoughtfully planned to include modern, community-focused spaces that prioritize quality and accessibility. Stay tuned as we transform more neighborhoods and build stronger, more inclusive communities across the country.
                </p>
              </div>

              <div className="news-details-share-box">
                <div className="news-details-inner">
                  <div className="news-details-list">
                    <div className="news-details-list-title">
                      <h4>Tags</h4>
                    </div>

                    <div className="news-details-list-button">
                      <Link to="/upcoming-cities-and-projects" className="btn btn-primary">
                        {" "}
                        Culture{" "}
                      </Link>

                      <Link to="/upcoming-cities-and-projects" className="btn btn-primary">
                        {" "}
                        Government{" "}
                      </Link>
                    </div>
                  </div>

                  <div className="news-details-list">
                    <div className="news-details-socials">
                      <Link to="https://twitter.com/">
                        <i className="fa-brands fa-twitter" />
                      </Link>
                      <Link to="https://www.facebook.com/">
                        <i className="fa-brands fa-facebook" />
                      </Link>
                      <Link to="https://in.pinterest.com/">
                        <i className="fa-brands fa-pinterest-p" />
                      </Link>
                      <Link to="https://www.linkedin.com/in/fraidoon-faridnia-082343a0/">
                        <i className="fa-brands fa-linkedin" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-form-content">
                  <div className="sidebar__item sidebar__item--search">
                    <form action="#" className="sidebar__search">
                      <label htmlFor="search" className="sr-only">
                        search here
                      </label>

                      <input type="text" placeholder="Search Here" />
                      <button
                        type="submit"
                        aria-label="search submit"
                        className="thm-btn"
                      >
                        <i className="flaticon-search-interface-symbol" />
                      </button>
                    </form>
                  </div>
                </div>

                <div className="sidebar-widget sidebar-widget-recent-post">
                  <h4>Recent Posts</h4>
                  <div className="sidebar-recent-post">
                    {/* <div className="sidebar-recent-post-img">
                      <img src={Blogdeatils02} alt="img-197" />
                    </div> */}

                    <div className="sidebar-recent-post-content">
                      <div className="sidebar-meta">
                        <div className="sidebar-meta-item">
                          <div className="sidebar-meta-icon">
                            <span className="author">
                              by<Link to="/the-future-of-housing">Admin</Link>
                            </span>
                          </div>
                        </div>

                        <div className="sidebar-post-title">
                          <h5>
                            <Link to="/the-future-of-housing">
                             The Future of Housing: How Modular Engineering is Changing the Game
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-recent-post">
                    {/* <div className="sidebar-recent-post-img">
                      <img src={Blogdeatils03} alt="img-198" />
                    </div> */}

                    <div className="sidebar-recent-post-content">
                      <div className="sidebar-meta">
                        <div className="sidebar-meta-item">
                          <div className="sidebar-meta-icon">
                            <span className="author">
                              by<Link to="/why-comminity-investment-is-the-key">Admin</Link>
                            </span>
                          </div>
                        </div>

                        <div className="sidebar-post-title">
                          <h5>
                            <Link to="/why-comminity-investment-is-the-key">
                              Why Community Investment is the Key to Affordable Housing
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-recent-post">
                    {/* <div className="sidebar-recent-post-img">
                      <img src={Blogdeatils04} alt="img-199" />
                    </div> */}

                    <div className="sidebar-recent-post-content">
                      <div className="sidebar-meta">
                        <div className="sidebar-meta-item">
                          <div className="sidebar-meta-icon">
                            <span className="author">
                              by<Link to="/upcoming-cities-and-projects">Admin</Link>
                            </span>
                          </div>
                        </div>

                        <div className="sidebar-post-title">
                          <h5>
                            <Link to="/upcoming-cities-and-projects">
                             GHI’s Expansion: Upcoming Cities and Projects
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
{/* 
                <div className="sidebar-widget sidebar-widget-recent-category">
                  <div className="sidebar-widget-recent-category-box">
                    <h4 className="section-title text-left">Categories</h4>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/newsdetails">
                          City News
                          <i className="fa-solid fa-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/newsdetails">
                          Community
                          <i className="fa-solid fa-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/newsdetails">
                          Culture <i className="fa-solid fa-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/newsdetails">
                          Devlopement
                          <i className="fa-solid fa-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/newsdetails">
                          Government
                          <i className="fa-solid fa-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div> */}

                {/* <div className="sidebar-widget sidebar-widget-tag">
                  <h4>Tags</h4>
                  <div className="sidebar-widget-tag-inner">
                    <Link to="/newsdetails">Culture</Link>
                    <Link to="/newsdetails">Government</Link>
                    <Link to="/newsdetails">City</Link>
                    <Link to="/newsdetails">Development</Link>
                    <Link to="/newsdetails">Life</Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
