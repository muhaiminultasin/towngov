import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../mencitygovernment/First'


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
        </div>
    </>
  )
}

export default Main