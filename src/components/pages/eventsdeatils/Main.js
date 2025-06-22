import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../meneventsdeatils/First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Events-Deatils || TownGov";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
        <Bredcom  
            subtitle="Home" 
            title="events details"
            subtitledown="Events Details" />
            <First/>
        </div>
    </>
  )
}

export default Main