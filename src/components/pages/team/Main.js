import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import Introtwo from '../menteam/Teamintrotwo'
import Team from '../../pages/menteam/Team'
import Client from '../../pages/menteam/Client'
import Testimonialtwo from '../../pages/menteam/Testimonialtwo'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Team || GHI";
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