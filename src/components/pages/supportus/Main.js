import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";
import First from '../../pages/mensupport/First'
import Aboutone from "../mensupport/Aboutone";

function Main() {
  useEffect(() => {
    document.getElementById("title").innerHTML = "Support Us || GHI";
  }, []);

  return (
    <>
      <Header />

      <div className="page-wrapper">
        <Bredcom subtitle="Home" title="Support us" subtitledown="Support Us" />
        <Aboutone/>
        <First />
      
        <div className="button-center">
          <Link to="/support">
            <button className="btn-primary">View More</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Main;
