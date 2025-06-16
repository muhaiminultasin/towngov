import React from "react";
import Shapes01 from "../../../assets/image/shapes/shape-1.png";
import Gallery07 from "../../../assets/image/gallery/about-7.jpg";

function GHIApproach({ sectionRef }) {
  return (
    <>
      <section
        ref={sectionRef}
        id="GHIApproach"
        style={{ scrollMarginTop: "60px" }}
        className="about-one-section"
      >
        <div className="container">
          <div className="row row-gutter-y-40">
            
            <div className="col-lg-12 col-xl-6">
              <div className="about-one-inner">
                <div className="section-tagline">Our Vision</div>

                <h2 className="section-title">Our Vision</h2>
                <p>
                  We are a global movement focused on providing sustainable and
                  affordable housing for all. Our mission is to create lasting
                  impact through innovation, collaboration, and community
                  engagement. We believe everyone deserves a safe place to call
                  home, and we work tirelessly to make that a reality. By
                  transforming communities and empowering individuals, we aim to
                  build not just houses, but strong foundations for better
                  lives. Together, we are shaping a future where housing is a
                  right, not a privilege.
                </p>
                {/* <h5 className="about-one-inner-text">
                  Denounce with righteous indignation and dislike men who are so
                  beguiled &amp; demoralized our power.
                </h5> */}
                {/* <div className="row row-gutter-y-30">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="about-one-card">
                      <div className="about-one-card-number">01</div>
                      <div className="about-one-card-content">
                        <h5>Going Above and Beyond</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="about-one-card">
                      <div className="about-one-card-number">02</div>
                      <div className="about-one-card-content">
                        <h5>Committed to People First</h5>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="about-one-image">
                <img
                  src={Shapes01}
                  className="floated-image-one"
                  alt="img-58"
                />
                <img src={Gallery07} alt="img-59" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GHIApproach;
