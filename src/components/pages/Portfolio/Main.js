import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../menportfolio/First'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Portfolio|| GHI";
  }, [])


  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="Portfolio"
            subtitledown="Portfolio"
           />
           <First/>
        </div>
    </>
  )
}

export default Main