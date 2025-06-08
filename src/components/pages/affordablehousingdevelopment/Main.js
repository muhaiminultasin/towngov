import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../menservices/First'
import Mayor from '../../menhome/Mayor'
import Second from '../menservices/Second'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Affordable Housing Development || GHI";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="Affordable Housing Development"
            subtitledown="Affordable Housing Development"
           />
            <First/>
            <Mayor/>
            <Second/>
        </div>
    </>
  )
}

export default Main