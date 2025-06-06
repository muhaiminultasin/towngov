import React, { useEffect } from "react";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";
import Introtwo from '../../pages/mendiagram/Introtwo'
import Cta from '../../pages/mendiagram/Cta'
import Testimonialtwo from '../../pages/mendiagram/Testimonialtwo'
import Lastf from '../../pages/mendiagram/Lastf'
import Counter from '../../pages/mendiagram/Counter'
import Blog from "../mendiagram/Blog";

function Main() {
  useEffect(() => {
    document.getElementById("title").innerHTML = "Diagram || TownGov";
  }, []);

  return (
    <>
      <Header />

      <div className="page-wrapper">
        <Bredcom subtitle="Home" title="Diagram" subtitledown="Diagram" />
        <Introtwo />
        <Counter />
        <Cta />
        <Blog/>
        <Testimonialtwo />
        <Lastf />
      </div>
    </>
  );
}

export default Main;
