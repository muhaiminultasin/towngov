import React, { useEffect } from 'react'
import Header from '../headerone/Main'
import Bredcom from '../../components/Bredcom/Main'

function Main() {

  useEffect(() => {
    document.getElementById("title").innerHTML="Privacy Policy || GHI";
  }, [])

  return (
    <>
        <Header/>

        <div className="page-wrapper">
          <Bredcom 
            subtitle="Home"
            title="Privacy Policy"
            subtitledown="Privacy Policy"
           />

<p>
    <br></br><br></br><br></br>
           Privacy Policy <br></br>
Last Updated: [Insert Date]<br></br>

We care about your privacy. This page explains what we do with your information when you visit our website.
<br></br>
What We Collect:<br></br>
Your name, email, or message (if you fill out a form).
<br></br>
Basic browsing data like pages you visit (using cookies).
<br></br>
How We Use It:
<br></br>
To reply to your messages or questions.
<br></br>
To send updates if you subscribed.
<br></br>
To improve our website experience.
<br></br>
We Don’t:<br></br>
Share or sell your information.
<br></br>
Collect any financial or sensitive data.
<br></br>
Cookies:<br></br>
Our site uses cookies to understand how people use it. You can disable cookies in your browser anytime.
<br></br>
Your Choices:<br></br>
You can ask us to delete your information or stop emails at any time by contacting us.
<br></br><br></br><br></br><br></br>
</p>
        </div>
    </>
  )
}

export default Main