import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../headerone/Main';
import Bredcom from '../Bredcom/Main';
import First from '../mencontact/First';
import Newlast from '../mencontact/Newlast'

function Main() {
  const section1Ref = useRef(null);
  const location = useLocation();
  

  useEffect(() => {
   document.getElementById("title").innerHTML = "Contact || GHI";

    if (location.hash === '#newslatter' && section1Ref.current) {
      section1Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Header />
      <div className="page-wrapper">
       
        <Bredcom subtitle="Home" title="Contact" subtitledown="Contact" />
        <First />
        <Newlast sectionRef={section1Ref} />
      </div>
      
      
    </>
  );
}

export default Main;
