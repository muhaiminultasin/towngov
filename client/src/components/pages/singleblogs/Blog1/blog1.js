import React, { useEffect } from 'react'
import Header from '../../../headerone/Main'
import Bredcom from '../../../Bredcom/Main'
import First from '../Blog1/First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="News || GHI";
  }, [])

  return (
    <>
        <Header/>
        <div className="page-wrapper">
        <Bredcom 
            subtitle="Home"
            title="Blogs"
            subtitledown="Blogs"
           />
            <First/>
        </div>
    </>
  )
}

export default Main