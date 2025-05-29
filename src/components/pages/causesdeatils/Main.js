import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../mencausesdeatils/First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Causes-Deatils || TownGov";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="causes details"
            subtitledown="Causes Details"
           />
            <First/>
        </div>
    </>
  )
}

export default Main