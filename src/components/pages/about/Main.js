import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import Aboutone from '../menabout/Aboutone'
import Client from '../../menhome/Client'
import Testimonial from '../menabout/Testimonial'
import Team from '../../menhometwo/Team'
import Last from '../menabout/Last'
import GHIApproach from '../menabout/GHIApproach'

function Main() {
  const section1Ref = useRef(null); // Our Story
  const section2Ref = useRef(null); // Our Approach

  const location = useLocation();

  useEffect(() => {
    document.getElementById("title").innerHTML = "About || TownGov";

    // Scroll to section based on hash
    const hash = location.hash;
    if (hash === '#our-story' && section1Ref.current) {
      section1Ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#GHIApproach' && section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Bredcom subtitle="Home" title="About" subtitledown="About"/>
        <Aboutone sectionRef={section1Ref} />
        <Client />
        <Testimonial />
        <GHIApproach sectionRef={section2Ref} />
        <Team />
        <Last />
      </div>
    </>
  );
}

export default Main;
