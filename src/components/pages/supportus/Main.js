import React, { useEffect } from "react";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";
import First from "../menportfolio/First";
import { Link } from "react-router-dom";

function Main() {
  useEffect(() => {
    document.getElementById("title").innerHTML = "Support Us || TownGov";
  }, []);

  return (
    <>
      <Header />

      <div className="page-wrapper">
        <Bredcom subtitle="Home" title="Support us" subtitledown="Support Us" />
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
