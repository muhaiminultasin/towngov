import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../menaffordablehousingdevelopment/First'


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
        </div>
    </>
  )
}

export default Main