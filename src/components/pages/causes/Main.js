import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../mencauses/First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Causes || GHI";
  }, [])


  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="causes"
            subtitledown="Causes"
           />
            <First/>
        </div>
    </>
  )
}

export default Main