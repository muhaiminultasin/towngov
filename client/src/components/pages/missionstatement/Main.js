import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import Mayor from '../menmissionstatement/Mayor'
import Testimonial from '../menmissionstatement/Testimonial'
import Event from '../menmissionstatement/Event'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Mission Statement || GHI";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="Mission Statement"
            subtitledown="Mission Statement"
           />
           
            <Mayor/>
            <Testimonial/>
            <Event/>
            
           
        </div>
    </>
  )
}

export default Main