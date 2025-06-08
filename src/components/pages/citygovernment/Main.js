import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../mencitygovernment/First'
import Mayor from '..//mencitygovernment/Mayor'
import Second from '../mencitygovernment/Second'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="City & Government Partnerships || GHI";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="City & Government Partnerships"
            subtitledown="City & Government Partnerships"
           />
            <First/>
            <Mayor/>
            <Second/>
        </div>
    </>
  )
}

export default Main