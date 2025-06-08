import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../mennews/First'


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
            title="News"
            subtitledown="News"
           />
            <First/>
        </div>
    </>
  )
}

export default Main