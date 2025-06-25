import React from "react";
import { Link } from "react-router-dom";
import Blog01 from "../../assets/image/Future.jpeg";
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

            <div className="col-lg-4">
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

            <div className="col-lg-4">
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
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop:"20px"
            }}
          >
            {/* <Link to={"/blogs"}><button className="btn btn-primary">Read More</button></Link> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
