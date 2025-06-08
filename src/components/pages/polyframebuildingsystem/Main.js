import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../menpolyframebuildingsystem/First'
import Mayor from '../menpolyframebuildingsystem/Mayor'
import Second from '../menpolyframebuildingsystem/Second'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="PolyFRAME Building System || GHI";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="PolyFRAME Building System"
            subtitledown="PolyFRAME Building System"
           />
            <First/>
            <Mayor/>
            <Second/>
        </div>
    </>
  )
}

export default Main