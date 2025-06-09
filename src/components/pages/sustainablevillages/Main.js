import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../mensustainablevillages/First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Sustainable Urban Villages || GHI";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
        <Bredcom 
            subtitle="Home"
            title="Sustainable Urban Villages"
            subtitledown="Sustainable Urban Villages"
           />
            <First/>
        </div>
    </>
  )
}

export default Main