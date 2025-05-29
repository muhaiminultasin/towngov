import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import Introtwo from '../menteam/Teamintrotwo'
import Team from '../../menhometwo/Team'
import Client from '../../menhome/Client'
import Testimonialtwo from '../../menhometwo/Testimonialtwo'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Team || TownGov";
  }, [])


  return (
    <>
        <Header/>

        <div className="page-wrapper">
            <Bredcom 
            subtitle="Home"
            title="Team"
            subtitledown="Team"
           />
            <Introtwo/>
            <Team/>
            <Client/>
            <Testimonialtwo/>
        </div>
        
    </>
  )
}

export default Main