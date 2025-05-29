import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/image/shapes/arrow.png'


function Service() {

    const [video, setVideo] = useState(false);

  return (
    <>
        <section className="service-section">
            <div className="container">
                <div className="row justify-content-between">
                <div className="col-lg-6">
                    <div className="section-title-box">
                    <div className="section-tagline">Government Service</div>
                    
                    <h2 className="section-title text-white"> Explore our Online <br /> Governmet Services <br /> &amp; Resources </h2>
                    <div className="section-text">
                        <p>
                        Aliquam viverra arcu. Donec aliquet blandit enim feugiat.
                        Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh
                        egestas tempus turpis, sit amet mattis magna varius non.
                        </p>
                    </div>
                    
                    <div className="service-arrow-image">
                        <img src={Arrow} alt="img-6" />
                    </div>
                    
                    </div>
                    
                </div>
                
                <div className="col-lg-5">
                    <div className="service-card">
                    <div className="service-card-video">
                        <Link to="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup" onClick={() => setVideo(true)} >
                            <i className="fa fa-play" />
                        </Link>
                    </div>
                 
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/departmentdetails"> Parking Permission <i className="fa-solid fa-chevron-right" /> </Link>
                        </li>
                        <li>
                             <Link to="/departmentdetails"> File a Tax Return <i className="fa-solid fa-chevron-right" /> </Link>
                        </li>
                        <li>
                            <Link to="/departmentdetails"> Order Birth Certificate{" "} <i className="fa-solid fa-chevron-right" /> </Link>
                        </li>
                        <li>
                            <Link to="/departmentdetails"> Get Building Permission{" "} <i className="fa-solid fa-chevron-right" /> </Link>
                        </li>
                        <li>
                            <Link to="/departmentdetails"> Apply for Driving License{" "} <i className="fa-solid fa-chevron-right" /> </Link>
                        </li>
                        <li>
                            <Link to="/departmentdetails"> Report Polution <i className="fa-solid fa-chevron-right" /> </Link>
                        </li>
                    </ul>
                    
                    <div className="service-button">
                        <Link to="/departmentdetails" className="btn btn-primary"> Discover More </Link>
                    </div>
                   
                    </div>
                   
                </div>
               
                </div>
                
            </div>
        </section>

        {/* {video && 
            <Iframe url="https://www.sdrive.app/embed/1ptBQD"  className="ytp-cued-thumbnail-overlay" data-layer="4" style={{}}>
                <div className="ytp-cued-thumbnail-overlay-image" style="background-image: url(&quot;https://i.ytimg.com/vi/rzfmZC3kg3M/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHIgWSgvMA8=&amp;rs=AOn4CLAH33qWSRN6OrdXatPoFW9U0SPl8A&quot;);"> </div>
                <button className="ytp-large-play-button ytp-button ytp-large-play-button-red-bg" aria-label="Play" onClick={() => { setVideo(false) }} >
                        <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                            <path className="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00">

                            </path>
                            <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                        </svg>
                </button>
            </Iframe>
        } */}
    </>
  )
}

export default Service