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
              <div className="about-one-image">
                <img
                  src={Shapes01}
                  className="floated-image-one"
                  alt="img-58"
                />
                <img src={Gallery07} alt="img-59" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="about-one-inner">
                <div className="section-tagline">Our Mission</div>

                <h2 className="section-title">Our Mission</h2>
                <p>
                **Our Mission**
Our mission is to create sustainable, safe, and affordable housing for all by fostering innovation, empowering communities, and driving collaborative solutions. We are committed to transforming lives and building stronger, more inclusive communities where everyone has the opportunity to thrive.

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
          </div>
        </div>
      </section>
    </>
  );
}

export default GHIApproach;
