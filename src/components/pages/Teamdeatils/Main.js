import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../menteamdeatils/First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Team Details || GHI";
  }, [])

  return (
    <>
         <Header/>

         <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="Team Details"
            subtitledown="Team Details"
           />
            <First/>
         </div>
    </>
  )
}

export default Main