import React from "react";
import { Link } from "react-router-dom";
import Blogdeatils01 from "../../../../assets/image/blog/blog-details-1.jpg";
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
                  <Link to="/newsdetails" className="news-details-box-date">
                    {" "}
                    28 SEP{" "}
                  </Link>
                </div>
              </div>

              <div className="news-details-meta-box">
                <div className="news-details-meta-box-inner">
                  <span className="author">
                    {" "}
                    by<Link to="/newsdetails">Admin</Link>{" "}
                  </span>

                  <span className="comment">
                    <Link to="/newsdetails">02 Comments</Link>
                  </span>
                </div>
              </div>

              <div className="news-details-content-box">
                <h4>GHI’s Expansion: Upcoming Cities and Projects</h4>
                <p>
                

GHI is gearing up for a major expansion, bringing innovative housing and commercial solutions to new cities. With a focus on modern design, community living, and sustainability, their upcoming projects aim to redefine urban development.

The expansion includes residential townships, mixed-use developments, and smart infrastructure in key locations across the country. Each project is carefully planned to meet growing demand while maintaining affordability and long-term value.

As GHI continues to grow, so does its commitment to building better cities—one project at a time. Stay tuned as we reveal the new cities on the map and the exciting developments coming your way.


                </p>
              </div>

              <div className="news-details-share-box">
                <div className="news-details-inner">
                  <div className="news-details-list">
                    <div className="news-details-list-title">
                      <h4>Tags</h4>
                    </div>

                    <div className="news-details-list-button">
                      <Link to="/newsdetails" className="btn btn-primary">
                        {" "}
                        Culture{" "}
                      </Link>

                      <Link to="/newsdetails" className="btn btn-primary">
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
                      <Link to="https://www.instagram.com/">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="news-details-author-box">
                <div className="news-details-author-image">
                  <img src={Blogdeatils05} alt="img-194" />
                </div>

                <div className="news-details-author-content">
                  <h4>Jessica Brown</h4>
                  <p>
                    Cursus massa at urnaaculis estie. Sed aliquamellus vitae
                    ultrs condmentum lightly believable. If you are going to use
                    a of you need to be sure there isn't anything embarrassing.
                  </p>
                </div>
              </div>

              <div className="news-details-comment-list-box">
                <h3>02 Comments</h3>
                <div className="news-details-comment-image">
                  <img src={Blogdeatils06} alt={195} />
                  <div className="news-details-comment-content">
                    <div className="news-details-meta">
                      <div className="news-details-meta-number">
                        <h5>Kevin Martin</h5>
                      </div>

                      <div className="news-details-meta-date">
                        <span>20 Oct, 2022</span>
                      </div>
                    </div>

                    <div className="news-details-comment-text">
                      <p>
                        Cursus massa at urnaaculis estie. Sed aliquamellus vitae
                        ultrs condmentum lightly believable. If you are going to
                        use a of you need to be sure there isn't anything
                        embarrassing.
                      </p>
                    </div>
                  </div>

                  <div className="news-details-comment-button">
                    <Link to="/newsdetails" className="btn btn-primary">
                      Reply
                    </Link>
                  </div>
                </div>

                <div className="news-details-comment-image">
                  <img src={Blogdeatils07} alt={196} />
                  <div className="news-details-comment-content">
                    <div className="news-details-meta">
                      <div className="news-details-meta-number">
                        <h5>Sarah Albert</h5>
                      </div>

                      <div className="news-details-meta-date">
                        <span>20 Oct, 2022</span>
                      </div>
                    </div>

                    <div className="news-details-comment-text">
                      <p>
                        Cursus massa at urnaaculis estie. Sed aliquamellus vitae
                        ultrs condmentum lightly believable. If you are going to
                        use a of you need to be sure there isn't anything
                        embarrassing.
                      </p>
                    </div>
                  </div>

                  <div className="news-details-comment-button">
                    <Link to="/newsdetails" className="btn btn-primary">
                      Reply
                    </Link>
                  </div>
                </div>
              </div>

              <div className="news-details-comment-form">
                <h3>Leave a Comment</h3>
                <form
                  className="contact-form contact-form-validated"
                  action="assets/inc/sendemail.php"
                  method="post"
                >
                  <div className="row row-gutter-10">
                    <div className="col-12 col-lg-6">
                      <input
                        type="text"
                        className="input-text"
                        placeholder="Your name"
                        name="name"
                        aria-required="true"
                      />
                    </div>

                    <div className="col-12 col-lg-6">
                      <input
                        type="email"
                        className="input-text"
                        placeholder="Email address"
                        name="email"
                        aria-required="true"
                      />
                    </div>

                    <div className="col-12 col-lg-12">
                      <textarea
                        name="message"
                        placeholder="Write a message"
                        className="input-text "
                        aria-required="true"
                        defaultValue={""}
                      />
                    </div>

                    <div className="col-12 col-lg-12">
                      <button className="btn btn-primary">
                        Submit Comment
                      </button>
                    </div>
                  </div>
                </form>
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
                    <div className="sidebar-recent-post-img">
                      <img src={Blogdeatils02} alt="img-197" />
                    </div>

                    <div className="sidebar-recent-post-content">
                      <div className="sidebar-meta">
                        <div className="sidebar-meta-item">
                          <div className="sidebar-meta-icon">
                            <span className="author">
                              by<Link to="/newsdetails">Admin</Link>
                            </span>
                          </div>
                        </div>

                        <div className="sidebar-post-title">
                          <h5>
                            <Link to="#">
                              Learn how access to municipal council
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-recent-post">
                    <div className="sidebar-recent-post-img">
                      <img src={Blogdeatils03} alt="img-198" />
                    </div>

                    <div className="sidebar-recent-post-content">
                      <div className="sidebar-meta">
                        <div className="sidebar-meta-item">
                          <div className="sidebar-meta-icon">
                            <span className="author">
                              by<Link to="/newsdetails">Admin</Link>
                            </span>
                          </div>
                        </div>

                        <div className="sidebar-post-title">
                          <h5>
                            <Link to="#">
                              Learn how access to municipal council
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-recent-post">
                    <div className="sidebar-recent-post-img">
                      <img src={Blogdeatils04} alt="img-199" />
                    </div>

                    <div className="sidebar-recent-post-content">
                      <div className="sidebar-meta">
                        <div className="sidebar-meta-item">
                          <div className="sidebar-meta-icon">
                            <span className="author">
                              by<Link to="/newsdetails">Admin</Link>
                            </span>
                          </div>
                        </div>

                        <div className="sidebar-post-title">
                          <h5>
                            <Link to="#">
                              Learn how access to municipal council
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
                </div>

                <div className="sidebar-widget sidebar-widget-tag">
                  <h4>Tags</h4>
                  <div className="sidebar-widget-tag-inner">
                    <Link to="/newsdetails">Culture</Link>
                    <Link to="/newsdetails">Government</Link>
                    <Link to="/newsdetails">City</Link>
                    <Link to="/newsdetails">Development</Link>
                    <Link to="/newsdetails">Life</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
