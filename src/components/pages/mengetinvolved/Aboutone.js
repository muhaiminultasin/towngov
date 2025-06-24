import React from "react";
import Shapes01 from "../../../assets/image/shapes/shape-1.png";
import Gallery07 from "../../../assets/image/housing.jpg";

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
                <div className="section-tagline">Engage
</div>

                <h2 className="section-title">Be Part of the Housing Revolution</h2>
                <p>
                 At Global Housing Initiative, we believe real change starts with collective action. Whether you're an investor, policymaker, nonprofit, or individual, your involvement accelerates our mission. Join us in creating resilient, affordable housing and transforming communities through innovation, equity, and shared purpose.
                </p>
                
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
