import React, {useState} from 'react'
import Gallery05 from '../../../assets/image/gallery/about-5.jpg'
import Gallery06 from '../../../assets/image/gallery/about-6.jpg'
import Shapes01 from '../../../assets/image/shapes/shape-1.png'
import Shapes03 from '../../../assets/image/shapes/about-3.jpg'
import Iframe from 'react-iframe'


function Teamintrotwo() {

    const [video, setVideo] = useState();

  return (
    <>
        <section className="about-two-section about-two">
            <div className="container">
                <div className="row justify-content-between row-gutter-y-60">
                <div className="col-lg-12 col-xl-6 col-xxl-6">
                    <div className="about-two-image">
                    <div className="about-two-image-inner img-one">
                        <img src={Gallery05} alt="img-74" />
                        <img src={Shapes03} className="floated-image" alt="img-75" />
                        <div className="sign-text">Kevin Martin</div>
                    </div>
                  
                    <div className="about-two-image-inner img-two">
                        <img src={Shapes01} alt="img-76" className="mayor-image" />
                        <img src={Gallery06} alt="img-77" />
                    </div>
                    
                    <div className="about-two-service-video">
                        <a href="https://www.youtube.com/watch?v=rzfmZC3kg3M" className="video-popup" onClick={() => setVideo(true)} >
                            <i className="fa fa-play" />
                        </a>
                    </div>
                   
                    </div>
                    
                </div>
                
                <div className="col-lg-12 col-xl-6 col-xxl-6">
                    <div className="about-two-inner">
                    <div className="section-tagline">Our introductions</div>
                   
                    <h2 className="section-title">Meet Mayor who Care About our City</h2>
                    
                    <div className="row row-gutter-y-20">
                        <div className="col-xl-6 col-lg-12 col-md-6">
                        <div className="about-two-content">
                            <i className="fa-solid fa-circle-check" />
                            <h4 className="about-two-title">Human Resources</h4>
                        </div>
                        
                        </div>
                       
                        <div className="col-xl-6 col-lg-12 col-md-6">
                        <div className="about-two-content">
                            <i className="fa-solid fa-circle-check" />
                            <h4 className="about-two-title">Economic Data</h4>
                        </div>
                        
                        </div>
                       
                    </div>
                    
                    <div className="about-two-text">
                        <div className="about-two-text-inner-one">
                        <p className="lead">
                            We denounce with righteous indignation and dislike men who are
                            so beguiled demoralized charms of pleasure.
                        </p>
                       
                        </div>
                        
                        <p>
                        Aliquam viverra arcu. Donec aliquet blandit enim. Suspendisse id
                        quam sed eros tincidunt luctus sit amet eu nibh egestas tempus
                        turpis, sit amet mattis magna varius non.
                        </p>
                    </div>
                    
                    <div className="about-two-author-content">
                        <div className="about-two-author-content-box">
                        <div className="about-two-author-content-icon">
                            <i className="fa-solid fa-phone-flip" />
                        </div>
                        
                        <div className="about-two-author-content-contact">
                            <h5>Mayor Office</h5>
                            <a href="tel:+92-9800-6869">+92 (9800) 6869</a>
                        </div>
                        
                        </div>
                       
                        <div className="about-two-author-content-socials">
                            <a href="https://twitter.com/">
                                <i className="fa-brands fa-twitter" />
                            </a>
                            <a href="https://www.facebook.com/">
                                <i className="fa-brands fa-facebook" />
                            </a>
                            <a href="https://in.pinterest.com/">
                                <i className="fa-brands fa-pinterest-p" />
                            </a>
                            <a href="https://www.instagram.com/">
                                <i className="fa-brands fa-instagram" />
                            </a>
                        </div>
                       
                    </div>
                   
                    </div>
                   
                </div>
                
                </div>
                
            </div>
        </section>

        {video && 
            <Iframe  className="ytp-cued-thumbnail-overlay" data-layer="4" style={{}}>
                <div className="ytp-cued-thumbnail-overlay-image" style="background-image: url(&quot;https://i.ytimg.com/vi/rzfmZC3kg3M/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHIgWSgvMA8=&amp;rs=AOn4CLAH33qWSRN6OrdXatPoFW9U0SPl8A&quot;);"> </div>
                <button className="ytp-large-play-button ytp-button ytp-large-play-button-red-bg" aria-label="Play" onClick={() => setVideo(false)}>
                        <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                            <path className="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00">

                            </path>
                            <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                        </svg>
                </button>
            </Iframe>
        }
    </>
  )
}

export default Teamintrotwo