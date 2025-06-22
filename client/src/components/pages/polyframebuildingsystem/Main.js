import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../menpolyframebuildingsystem/First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Polyframe Building System || GHI";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
        <Bredcom 
            subtitle="Home"
            title="Polyframe Building System"
            subtitledown="Polyframe Building System"
           />
            <First/>
        </div>
    </>
  )
}

export default Main