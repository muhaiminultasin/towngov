import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";
import First from '../menportfolio/First'
import Aboutone from "../mengetinvolved/Aboutone";
import Testimonial from "../../menhome/Testimonialtwo";
import Contactform from "../../mencontact/First";

function Main() {
  useEffect(() => {
    document.getElementById("title").innerHTML = "Get Involved || GHI";
  }, []);

  return (
    <>
      <Header />

      <div className="page-wrapper">
        <Bredcom subtitle="Home" title="Get Involved" subtitledown="Get Involved" />
        <Aboutone/>
        <First />
        <Testimonial />
        <Contactform />
      </div>
    </>
  );
}

export default Main;
