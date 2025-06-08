import React, { useEffect } from "react";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";
import Mayor from "../menghi/Meyor";
import Portfolio from "../menghi/Portfolio";
import Aboutone from "../menghi/Aboutone";
import Client from "../menghi/Client";
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
