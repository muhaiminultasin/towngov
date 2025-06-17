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
                <ul>
                  <li>
                    Innovative Design: Utilizing the latest architectural and
                    engineering technologies to create functional and
                    aesthetically pleasing housing solutions. Innovative Design:
                    Utilizing the latest architectural and engineering
                    technologies to create functional and aesthetically pleasing
                    housing solutions.
                  </li>
                  <li>
                    Sustainability: Committing to environmentally friendly building practices that reduce our carbon footprint and promote ecological balance.
                  </li>
                  <li>
                    Community Focus: Developing projects that foster a sense of community, inclusion, and support for residents from all walks of life.
                  </li>
                  <li>
                    Affordability: We ensure our housing solutions are accessible to low—and middle-income families without compromising quality or safety.
                  </li>
                  <li>
                    Smart Housing: Incorporating IoT technologies to create innovative, connected homes that enhance the living experience through increased convenience, energy efficiency, and security.

                  </li>
                </ul>
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
