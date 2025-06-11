import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../menservices/First'
import Mayor from '../../pages/menservices/Mayor'
import Second from '../menservices/Second'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Our Solutions || GHI";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="Our Solutions"
            subtitledown="Our Solutions"
           />
            <First/>
            <Mayor/>
            <Second/>
        </div>
    </>
  )
}

export default Main