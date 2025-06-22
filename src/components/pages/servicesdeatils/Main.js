import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../menservicesdeatils/First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Services-Deatils || TownGov";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
        <Bredcom 
            subtitle="Home"
            title="services details"
            subtitledown="Services Details"
           />
            <First/>
        </div>
    </>
  )
}

export default Main