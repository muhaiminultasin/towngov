import React, { useEffect } from "react";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";
import Mayor from "../menuvi/Meyor";
import Portfolio from "../menuvi/Portfolio";
import Aboutone from "../menuvi/Aboutone";
import Client from "../menuvi/Client";
function Main() {
  useEffect(() => {
    document.getElementById("title").innerHTML = "Community Development & Investment || TownGov";
  }, []);

  return (
    <>
      <Header />

      <div className="page-wrapper">
        <Bredcom
          title={"Community Development & Investment"}
          subtitle={"Home"}
          subtitledown={"Community Development & Investment"}
        />
        <Mayor/>
        <Portfolio/>
        <Aboutone/>
        <Client/>
      </div>
    </>
  );
}

export default Main;
