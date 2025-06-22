import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../menevents/First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Events || TownGov";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
        <Bredcom 
            subtitle="Home"
            title="Events"
            subtitledown="Events"
           />
            <First/>
        </div>

    </>
  )
}

export default Main