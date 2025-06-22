import React from "react";
import { Link } from "react-router-dom";
import Blog01 from "../../assets/image/The Future.jpeg";
import Blog02 from "../../assets/image/CommunityInvestment.png";
import Blog03 from "../../assets/image/GHI’s.jpg"

function Blog() {
  return (
    <>
      <section className="blog-section">
        <div className="container">
          <div className="blog-box">
            <div className="section-title-box text-center">
              <div className="section-tagline">DIRECT FROM THE BLOG POSTS</div>
              <h2 className="section-title">
                Latest Blog Posts <br /> & Research{" "}
              </h2>
            </div>
          </div>
          <div className="row row-gutter-y-155">
            <div className="col-lg-4">
              <div className="blog-card">
                <div className="blog-card-image">
                  <img src={Blog01} className="img-fluid" alt="img-22" />
                  <Link to="/blog1"> </Link>
                </div>

                <div className="blog-card-date">
                  <Link to="/blog1">28SEP</Link>
                </div>

                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="author">
                      by<Link to="/blog1">Admin</Link>
                    </span>

                    <span className="comment">
                      <Link to="/blog1">02 Comments</Link>
                    </span>
                  </div>

                  <h4>
                    <Link to="/blog1">
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

            <div className="col-lg-4">
              <div className="blog-card">
                <div className="blog-card-image">
                  <img src={Blog02} className="img-fluid" alt="img-23" />
                  <Link to="/blog2" />
                </div>

                <div className="blog-card-date">
                  <Link to="/blog2">28SEP</Link>
                </div>

                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="author">
                      by<Link to="/blog2">Admin</Link>
                    </span>

                    <span className="comment">
                      <Link to="/blog2">02 Comments</Link>
                    </span>
                  </div>

                  <h4>
                    <Link to="/blog2">
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

            <div className="col-lg-4">
              <div className="blog-card">
                <div className="blog-card-image">
                  <img src={Blog03} className="img-fluid" alt="img-24" />
                  <Link to="/blog2" />
                </div>

                <div className="blog-card-date">
                  <Link to="/blog3">28SEP</Link>
                </div>

                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="author">
                      by<Link to="/blog3">Admin</Link>
                    </span>

                    <span className="comment">
                      <Link to="/blog3">02 Comments</Link>
                    </span>
                  </div>

                  <h4>
                    <Link to="/blog3">
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
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop:"20px"
            }}
          >
            <Link to={"/news"}><button className="btn btn-primary">Read More</button></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
