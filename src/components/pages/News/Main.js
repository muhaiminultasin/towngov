import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import Blog from '../../menhome/Blog'


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
            <Blog/>
        </div>
    </>
  )
}

export default Main