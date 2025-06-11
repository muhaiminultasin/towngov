import React, { useEffect } from 'react'
import Header from '../headerone/Main'
import Blog from '../menhome/Blog'
import Client from '../menhome/Client'
import Counter from '../menhome/Counter'
import Event from '../menhome/Event'
import Intro from '../menhome/Intro'
import Mayor from '../menhome/Mayor'
import Newlast from '../menhome/Newlast'
import Portfolio from '../menhome/Portfolio'
import Service from '../menhome/Service'
import Slider from '../menhome/Slider'
import Testimonial from '../menhome/Testimonial'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Home  || GHI";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
            <Slider/>
            <Intro/>
            <Mayor/>
            <Service/>
            <Counter/>
            <Portfolio/>
            <Client/>
            <Testimonial/>
            <Event/>
            <Blog/>
            <Newlast/>
        </div>

    </>
  )
}

export default Main