import React from "react";
import Shapes01 from "../../../assets/image/shapes/shape-1.png";
import Gallery07 from "../../../assets/image/gallery/about-7.jpg";

function Aboutone({ sectionRef }) {
  return (
    <>
      <section
        ref={sectionRef}
        id="our-story"
        style={{ scrollMarginTop: "20vh" }}
        className="about-one-section"
      >
        <div className="container">
          <div className="row row-gutter-y-40">
            <div className="col-lg-12 col-xl-6">
              <div className="about-one-inner">
                <div className="section-tagline">Global Housing Initiative (GHI)
</div>

                <h2 className="section-title">Welcome to the Global Housing Initiative (GHI)
</h2>
                <p>
                  At Global Housing Initiative (GHI), we aim to revolutionize the housing industry through innovation, sustainability, and community empowerment. We strive to develop affordable, high-quality housing solutions that cater to the diverse needs of communities worldwide.

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

export default Aboutone;
