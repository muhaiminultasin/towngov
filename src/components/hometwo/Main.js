import React, {useEffect} from 'react'
import Header from '../headertwo/Main'
import Blog from '../menhome/Blog'
import Cta from '../menhometwo/Cta'
import Introtwo from '../menhometwo/Introtwo'
import Lastf from '../menhometwo/Lastf'
import Offer from '../menhometwo/Offer'
import Portfolio from '../menhometwo/Portfolio'
import Servicetwo from '../menhometwo/Servicetwo'
import Slider from '../menhometwo/Slider'
import Team from '../menhometwo/Team'
import Testimonialtwo from '../menhometwo/Testimonialtwo'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Home Two || TownGov";
  }, [])
  
  
  return (
    <>
        <Header/>

        <div className="page-wrapper">
            <Slider/>
            <Servicetwo/>
            <Introtwo/>
            <Cta/>
            <Offer/>
            <Team/>
            <Portfolio/>
            <Testimonialtwo/>
            <Blog/>
            <Lastf/>

        </div>
    </>
  )
}

export default Main