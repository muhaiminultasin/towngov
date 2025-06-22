import React from 'react'
import Bg01 from '../../../assets/image/bg/slider-two-bg-1.png'
import Bg02 from '../../../assets/image/bg/slider-bg-1.png'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';

function Slider() {

    const settings = {
        loop:true,
            nav:true,
            items: 1,
            dots:false,
            navText: ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>']
      };

  return (
    <>
        <section className="main-slider main-slider-two">
            <OwlCarousel className="main-slider-two-swiper owl-carousel owl-theme" {...settings}>

                <div className="item">
                <div className="item-slider-bg" style={{ backgroundImage:`url(${Bg01})` }} />
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="slider-content-two text-center">
                        <div className="slider-tagline-two">
                            City Goverment Online Services
                        </div>
                        <h1 className="section-title">
                            Good Governance <br /> Part of the Democracy
                        </h1>
                        <Link to="/hometwo" className="btn btn-primary">
                            Discover More
                        </Link>
                        </div>
                       
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                
                <div className="item">
                <div className="item-slider-bg" style={{ backgroundImage:`url(${Bg02})` }} />
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-12 col-lg-12">
                        <div className="slider-content-two text-center">
                        <div className="slider-tagline-two">
                            City Goverment Online Services
                        </div>
                        <h1 className="section-title">
                            Good Governance <br /> Part of the Democracy
                        </h1>
                        <Link to="#" className="btn btn-primary">
                            Discover More
                        </Link>
                        </div>
                       
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                
            </OwlCarousel>
        </section>
    </>
  )
}

export default Slider