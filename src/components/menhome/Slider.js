import React from 'react'
import { Link } from 'react-router-dom'
import Bgone from '../../assets/image/Hero/hero-ghi.jpg'
import Bgtwo from '../../assets/image/bg/slider-two-bg-1.png'
import OwlCarousel from 'react-owl-carousel';


function Slider() {

    const settings = {
        loop:true,
			autoplay:true,
			nav:true,
			items: 1,
			dots:false,
			navText: ['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>']
      };


  return (
    <>
        <section className="main-slider">
            
            <OwlCarousel className="main-slider-swiper owl-carousel owl-theme" {...settings}>

                <div className="item">
                <div className="item-slider-bg" style={{ backgroundImage:`url(${Bgone})` }}/>
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="slider-content"> <div className="slider-tagline"> City Goverment Online Services
                        </div>
                        <h1 className="section-title"> Fastest Growing <br /> City Rome
                        </h1>
                        <Link to="#" className="btn btn-primary"> Discover More </Link>
                        </div>
                        
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
              
                <div className="item">
                <div className="item-slider-bg" style={{ backgroundImage:`url(${Bgone})` }} />
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="slider-content">
                        <div className="slider-tagline"> City Goverment Online Services </div>
                        <h1 className="section-title"> Fastest Growing <br /> City Rome 2 </h1>
                            <Link to="#" className="btn btn-primary"> Discover More </Link>
                        </div>      
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                <div className="item">
                <div className="item-slider-bg" style={{ backgroundImage:`url(${Bgone})` }} />
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="slider-content">
                        <div className="slider-tagline"> City Goverment Online Services </div>
                        <h1 className="section-title"> Fastest Growing <br /> City Rome 3 </h1>
                            <Link to="#" className="btn btn-primary"> Discover More </Link>
                        </div>      
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                <div className="item">
                <div className="item-slider-bg" style={{ backgroundImage:`url(${Bgone})` }} />
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="slider-content">
                        <div className="slider-tagline"> City Goverment Online Services </div>
                        <h1 className="section-title"> Fastest Growing <br /> City Rome 4 </h1>
                            <Link to="#" className="btn btn-primary"> Discover More </Link>
                        </div>      
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                <div className="item">
                <div className="item-slider-bg" style={{ backgroundImage:`url(${Bgone})` }} />
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="slider-content">
                        <div className="slider-tagline"> City Goverment Online Services </div>
                        <h1 className="section-title"> Fastest Growing <br /> City Rome 5 </h1>
                            <Link to="#" className="btn btn-primary"> Discover More </Link>
                        </div>      
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                <div className="item">
                <div className="item-slider-bg" style={{ backgroundImage:`url(${Bgone})` }} />
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="slider-content">
                        <div className="slider-tagline"> City Goverment Online Services </div>
                        <h1 className="section-title"> Fastest Growing <br /> City Rome 6 </h1>
                            <Link to="#" className="btn btn-primary"> Discover More </Link>
                        </div>      
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
              
            </OwlCarousel>

        </section>

        <section className="department-section">
            <div className="container">
                <div className="department-section-inner">
                <div className="row row-gutter-y-40">
                    <div className="col-xl-2 col-lg-4 col-md-6">
                    <div className="department-card">
                        <div className="department-card-icon">
                        <Link to="">
                            <i className="flaticon-parthenon" />
                        </Link>
                        </div>
                        
                        <div className="department-card-content">
                        <h5>
                            <Link to="">Your Government</Link>
                        </h5>
                        </div>
                       
                    </div>
                    
                    </div>
                    
                    <div className="col-xl-2 col-lg-4 col-md-6">
                    <div className="department-card">
                        <div className="department-card-icon">
                        <Link to="">
                            <i className="flaticon-suitcase" />
                        </Link>
                        </div>
                        
                        <div className="department-card-content">
                        <h5>
                            <Link to="">Jobs &amp; Unemployment</Link>
                        </h5>
                        </div>
                       
                    </div>
                    
                    </div>
                    
                    <div className="col-xl-2 col-lg-4 col-md-6">
                    <div className="department-card">
                        <div className="department-card-icon">
                        <Link to="">
                            <i className="flaticon-industry" />
                        </Link>
                        </div>
                        
                        <div className="department-card-content">
                        <h5>
                            <Link to="">Business &amp; Industry</Link>
                        </h5>
                        </div>
                       
                    </div>
                    
                    </div>
                    
                    <div className="col-xl-2 col-lg-4 col-md-6">
                    <div className="department-card">
                        <div className="department-card-icon">
                        <Link to="">
                            <i className="flaticon-bus" />
                        </Link>
                        </div>
                        
                        <div className="department-card-content">
                        <h5>
                            <Link to="">Roads &amp; Transport</Link>
                        </h5>
                        </div>
                       
                    </div>
                    
                    </div>
                    
                    <div className="col-xl-2 col-lg-4 col-md-6">
                    <div className="department-card">
                        <div className="department-card-icon">
                        <Link to="">
                            <i className="flaticon-lotus" />
                        </Link>
                        </div>
                        
                        <div className="department-card-content">
                        <h5>
                            <Link to="">Culture &amp; Recreation</Link>
                        </h5>
                        </div>
                       
                    </div>
                    
                    </div>
                    
                    <div className="col-xl-2 col-lg-4 col-md-6">
                    <div className="department-card">
                        <div className="department-card-icon">
                        <Link to="">
                            <i className="flaticon-balance-1" />
                        </Link>
                        </div>
                        
                        <div className="department-card-content">
                        <h5>
                            <Link to="">Justice, Safety Law</Link>
                        </h5>
                        </div>
                       
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                
            </div>
            
            <div className="department-search-section">
                <div className="container">
                    <form className="department-search-form">
                        <input type="text" placeholder="Get our quick services from the city municipal" name="search" />
                        
                        <button type="submit">Search</button>
                        
                    </form>
                </div>
            </div>
        </section>
        
    </>
  )
}

export default Slider