import React, { useEffect } from "react";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";
import Mayor from "../menourmodel/Meyor";
import Portfolio from "../menourmodel/Portfolio";
import Aboutone from "../menourmodel/Aboutone";
import Client from "../menourmodel/Client";
function Main() {
  useEffect(() => {
    document.getElementById("title").innerHTML = "Nonprofit Coordination & Strategy || GHI";
  }, []);

  return (
    <>
      <Header />

      <div className="page-wrapper">
        <Bredcom
          title={"Nonprofit Coordination & Strategy"}
          subtitle={"Home"}
          subtitledown={"Nonprofit Coordination & Strategy"}
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
