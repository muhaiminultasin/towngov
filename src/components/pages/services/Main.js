import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../menservices/First'
import Mayor from '../../menhome/Mayor'
import Second from '../menservices/Second'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Services || TownGov";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="Services"
            subtitledown="Services"
           />
            <First/>
            <Mayor/>
            <Second/>
        </div>
    </>
  )
}

export default Main