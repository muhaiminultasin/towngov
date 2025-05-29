import React , { useEffect } from 'react'
import Header from '../headerone/Main'
import Bredcom from '../Bredcom/Main'
import First from '../mencontact/First'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Contact || TownGov";
  }, [])

  return (
    <>
        <Header/>
        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="Contact"
            subtitledown="Contact"
           />
            <First/>
        </div>
    </>
  )
}

export default Main