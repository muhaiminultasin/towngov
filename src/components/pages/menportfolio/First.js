import React from "react";
import Portfolio01 from "../../../assets/image/portfolio1.jpg";
import Portfolio02 from "../../../assets/image/portfolio2.jpg";
import Portfolio03 from "../../../assets/image/portfolio3.jpg";
import Portfolio04 from "../../../assets/image/portfolio4.jpg";
import Portfolio05 from "../../../assets/image/portfolio/portfolio-5.jpg";
import Portfolio06 from "../../../assets/image/portfolio/portfolio-6.jpg";
import Portfolio07 from "../../../assets/image/portfolio/portfolio-7.jpg";
import Portfolio08 from "../../../assets/image/portfolio/portfolio-8.jpg";
import Portfolio09 from "../../../assets/image/portfolio/portfolio-9.jpg";

function First() {
  return (
    <div className="portfolio-section">
      <div className="container">
        <div className="row row-gutter-30">
          <div className="col-lg-4 col-md-4">
            <div className="portfolio-card">
              <img src={Portfolio03} className="img-fluid" alt="img-102" />
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="portfolio-card">
              <img src={Portfolio01} className="img-fluid" alt="img-103" />
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="portfolio-card">
              <img src={Portfolio02} className="img-fluid" alt="img-104" />
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="portfolio-card">
              <img src={Portfolio04} className="img-fluid" alt="img-105" />
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="portfolio-card">
              <img src={Portfolio09} className="img-fluid" alt="img-97" />
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="portfolio-card">
              <img src={Portfolio08} className="img-fluid" alt="img-98" />
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="portfolio-card">
              <img src={Portfolio07} className="img-fluid" alt="img-99" />
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="portfolio-card">
              <img src={Portfolio06} className="img-fluid" alt="img-100" />
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="portfolio-card">
              <img src={Portfolio05} className="img-fluid" alt="img-101" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
