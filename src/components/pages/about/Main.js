import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";
import Aboutone from "../../pages/menabout/Aboutone";
import Client from "../../menhome/Client";
import Testimonial from "../../menhome/Testimonial";
import Team from "../../pages/menabout/Team";
import Last from "../menabout/Last";
import GHIApproach from "../menabout/GHIApproach";
import Vission from "../menabout/Ourvission";
import Mission from '../menabout/Ourmission'
import Whatwedo from '../menabout/Whatwedo'
import Community from '../menabout/Ourcommunity'
import Join from '../menabout/Joinus'

function Main() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const location = useLocation();
  useEffect(() => {
    document.getElementById("title").innerHTML = "About || TownGov";

    const hash = location.hash;
    if (hash === "#our-story" && section1Ref.current) {
      section1Ref.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#GHIApproach" && section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Bredcom subtitle="Home" title="About" subtitledown="About" />
        <Aboutone sectionRef={section1Ref} />
        <Client />
        <Testimonial />
        <GHIApproach sectionRef={section2Ref} />
        <Vission />
        <Mission />
        <Team />
        <Whatwedo />
        <Community />
        <Join />
        <Last />
      </div>
    </>
  );
}

export default Main;
