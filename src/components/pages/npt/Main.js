import React, { useEffect } from "react";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";
import Mayor from "../menourmodel/Meyor";
import Portfolio from "../menourmodel/Portfolio";
import Aboutone from "../menourmodel/Aboutone";
import Client from "../menourmodel/Client";
function Main() {
  useEffect(() => {
    document.getElementById("title").innerHTML = "Structural System Provider || GHI";
  }, []);

  return (
    <>
      <Header />

      <div className="page-wrapper">
        <Bredcom
          title={"Structural System Provider"}
          subtitle={"Home"}
          subtitledown={"Structural System Provider"}
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
