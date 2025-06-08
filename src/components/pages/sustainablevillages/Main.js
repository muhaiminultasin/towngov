import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../mensustainablevillages/First'
import Mayor from '../mensustainablevillages/Mayor'
import Second from '../mensustainablevillages/Second'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Sustainable Urban Villages || GHI";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="Sustainable Urban Villagesg"
            subtitledown="Sustainable Urban Villages"
           />
            <First/>
            <Mayor/>
            <Second/>
        </div>
    </>
  )
}

export default Main