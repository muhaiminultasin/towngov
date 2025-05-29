import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../mennewsdeatils/First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="News-Details || TownGov";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="news details"
            subtitledown="News Details"
          />
            <First/>
        </div>
    </>
  )
}

export default Main