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
import Npg from '../menhome/Npg'
import Uvi from '../menhome/Uvi'
import Ghi from '../menhome/Ghi'
import Cta from '../menhome/Cta'
import Different from "../menhome/Different"

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
            <Different/>
            <Mayor/>
            <Npg/>
            <Uvi/>
            <Ghi/>
            <Service/>
            <Counter/>
            <Cta/>
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