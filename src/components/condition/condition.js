import React, { useEffect } from 'react'
import Header from '../headerone/Main'
import Bredcom from '../../components/Bredcom/Main'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Terms & Conditions || GHI";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="Terms & Conditions"
            subtitledown="Terms & Conditions"
           />

<p>
    <br></br><br></br><br></br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br></br>
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
<br></br>
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
<br></br>
Nisi ut aliquip ex ea commodo consequat.
<br></br>
Duis aute irure dolor in reprehenderit in voluptate velit esse.
<br></br>
Cillum dolore eu fugiat nulla pariatur.
<br></br>
Excepteur sint occaecat cupidatat non proident.
<br></br>
Sunt in culpa qui officia deserunt mollit anim id est laborum.
<br></br>
Curabitur pretium tincidunt lacus.
<br></br>
Nulla gravida orci a odio.
<br></br>
Nullam varius, turpis et commodo pharetra, est eros bibendum elit.
<br></br>
Nec luctus magna felis sollicitudin mauris.
<br></br>
Integer in mauris eu nibh euismod gravida.
<br></br>
Duis ac tellus et risus vulputate vehicula.
<br></br>
Donec lobortis risus a elit.
<br></br>
Etiam tempor.
<br></br>
Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis.
<br></br>
Id tincidunt sapien risus a quam.
<br></br>
Maecenas fermentum consequat mi.
<br></br>
Donec fermentum.
<br></br><br></br><br></br><br></br>
</p>
        </div>
    </>
  )
}

export default Main