import React , { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import Accordionsection from './Accordiognsection';

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="FAQ || TownGov";
  }, [])

 

  return (
    <>
        <Header/>
        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="FAQ"
            subtitledown="FAQ"
           />
           <Accordionsection/>
        </div>
    </>
  )
}
export default Main;


