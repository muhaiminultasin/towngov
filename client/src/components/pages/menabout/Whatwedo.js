import React from "react";
import Shapes01 from "../../../assets/image/shapes/shape-1.png";
import Gallery07 from "../../../assets/image/what.jpg";

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
                <div className="section-tagline">What We Do</div>

                <h2 className="section-title">What We Do</h2>
                <p>
              GHI's Multifamily Polygonal Towers are designed to be adaptable to various geographical and climatic conditions, making them ideal for deployment across different regions. Our projects are built-ready, ensuring a streamlined development process from concept to completion. By focusing on modular construction techniques, we can reduce costs, shorten build times, and maintain high-quality standards.

              <br></br>
              <br></br>
              Our high manufacturing capacity supports the construction of our PolyFRAME polygonal multistory tower worldwide. This capacity enables us to produce large volumes of housing units efficiently, ensuring timely delivery and consistency in quality across all our projects.


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
