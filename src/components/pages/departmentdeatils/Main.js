import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../mendepartmentdeatils/First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Departments-Deatils || TownGov";
  }, [])


  return (
    <>
        <Header/>

        <div className="page-wrapper">
        <Bredcom 
            subtitle="Home"
            title="departments details"
            subtitledown="Departments Details"
           />
            <First/>
        </div>
    </>
  )
}

export default Main