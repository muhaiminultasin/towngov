import React, {useEffect} from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import Aboutone from '../menabout/Aboutone'
import Client from '../../menhome/Client'
import Testimonial from '../menabout/Testimonial'
import Team from '../../menhometwo/Team'
import Last from '../menabout/Last'
import GHIApproach from '../menabout/GHIApproach'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="About || TownGov";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom
           subtitle="Home"
           title="About"
           subtitledown="About"
           />
          <Aboutone/>
          <Client/>
          <Testimonial/>
          <GHIApproach/>
          <Team/>
          <Last/>
        </div>
        
    </>
  )
}

export default Main