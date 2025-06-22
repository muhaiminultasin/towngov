import React, { useEffect } from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import First from '../mendepartments/First'


function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Departments || GHI";
  }, [])


  return (
    <>
        <Header/>

        <div className="page-wrapper">
        <Bredcom 
            subtitle="Home"
            title="Departments"
            subtitledown="Departments"
           />
            <First/>
        </div>

    </>
  )
}

export default Main