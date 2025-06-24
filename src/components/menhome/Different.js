import React, { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/image/shapes/arrow.png";
import Gallery01 from "../../assets/image/impact.jpg";

function Service() {
  const [video, setVideo] = useState(false);

  return (
    <>
      <section className="service-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="section-title-box">
                <div className="section-tagline">Why We're Different</div>

                <h2 className="section-title text-white">
                  Manufacturing for Scalable Impact
                </h2>
                <div className="section-text">
                  <p>
                    At the Global Housing Initiative and NeoPOLYGON Technology,
                    we are establishing our in-house steel fabrication system to
                    produce all core components of the PolyFRAME structural
                    system. This includes beams, columns, and connection members
                    made from 8-gauge steel, utilizing advanced CNC press brakes
                    and precision cutting technology.
                  </p>
                  <p>
                    Most importantly, the system is fully scalable and can be
                    installed locally, allowing us to launch projects within
                    California and across the globe with complete control over
                    quality, cost, and speed.
                  </p>
                  <p>
                    This capability is central to our vision: delivering resilient, affordable housing through a globally replicable model that starts with smart, localized manufacturing.
                  </p>
                </div>

                
              </div>
            </div>

            <div className="col-lg-5">
              <div className="about-image">
                <div className="about-image-inner img-one">
                  <img src={Gallery01} className="img-fluid" alt="img-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
