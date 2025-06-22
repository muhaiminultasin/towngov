import React, { useEffect } from "react";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";
import Mayor from "../menourmodel/Meyor";
import Portfolio from "../menourmodel/Portfolio";
import Aboutone from "../menourmodel/Aboutone";
import Client from "../menourmodel/Client";
function Main() {
  useEffect(() => {
    document.getElementById("title").innerHTML = "Our Model || GHI";
  }, []);

  return (
    <>
      <Header />

      <div className="page-wrapper">
        <Bredcom
          title={"Our model"}
          subtitle={"Home"}
          subtitledown={"Our Model"}
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
