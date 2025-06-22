import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../menportfoliodeatils/First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Portfolio-deatils|| TownGov";
  }, [])

  return (
    <>
         <Header/>

        <div className="page-wrapper">
        <Bredcom 
            subtitle="Home"
            title="Portfolio Details"
            subtitledown="Portfolio Details"
           />
            <First/>
        </div>
    </>
  )
}

export default Main