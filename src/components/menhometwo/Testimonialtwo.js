import React, { useState } from 'react'
import Testimonial01 from '../../assets/image/testimonial/testimonial-1.jpg'
import Testimonial02 from '../../assets/image/testimonial/testimonial-2.jpg'
import Testimonial03 from '../../assets/image/testimonial/testimonial-3.jpg'
import Testimonial04 from '../../assets/image/testimonial/testimonial-4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,Thumbs,FreeMode } from "swiper";

function Testimonialtwo() {
    
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
        <section className="testimonial-two-section">
            <div className="testimonial-two-inner">
                <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-4">
                    <div className="testimonial-two-content">
                        <div className="section-title-box">
                        <div className="section-tagline">TESTIMONIALS</div>
                        
                        <h2 className="section-title">
                            What They’re Talking About Gowrnx
                        </h2>
                        <p>
                            Aliquam viverra arcu. Donec aliquet blandit enim feugiat.
                            Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh
                            tempus turpis.
                        </p>
                        </div>
                        
                    </div>
                    
                    <div className="testimonial-author-thumb">
                        <Swiper className="swiper author-thumb-carousel"
                                 slidesPerView={3} 
                                 spaceBetween={0}
                                 modules={[FreeMode, Navigation, Thumbs]}
                                 onSwiper={setThumbsSwiper}
                                 freeMode={true}
                                 watchSlidesProgress={true} >

                            <div className="swiper-wrapper">

                                <SwiperSlide className="swiper-slide">
                                <div className="author-thumb-image">
                                    <img src={Testimonial02} className="img-fluid" alt="img-48" />
                                </div>
                            
                                </SwiperSlide>
                                
                                <SwiperSlide className="swiper-slide">
                                <div className="author-thumb-image">
                                    <img src={Testimonial03} className="img-fluid" alt="img-49" />
                                </div>
                            
                                </SwiperSlide>
                                
                                <SwiperSlide className="swiper-slide">
                                <div className="author-thumb-image">
                                    <img src={Testimonial04} className="img-fluid" alt="img-50" />
                                </div>
                            
                                </SwiperSlide>
                                
                            </div>

                        </Swiper>
                    </div>
                    
                    </div>
                    
                    <div className="col-lg-5">
                    <div className="testimonial-author-review">
                        <Swiper className="swiper author-review-carousel"
                         spaceBetween={60} 
                         slidesPerView={1} 
                         loop={true} 
                         thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                         pagination={{
                             clickable: true,
                             el: ".swiper-pagination"
                           }}
                         modules={[Autoplay, Navigation,Thumbs,FreeMode ]} >

                            <div className="swiper-wrapper">

                                <SwiperSlide className="swiper-slide">
                                <div className="testimonial-two-card">
                                    <div className="testimonial-two-card-content">
                                    <div className="testimonial-two-card-text">
                                        <p>
                                        This is due to their excellent service, competitive
                                        pricing and customer support. It’s throughly refresing
                                        to get such a personal touch. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum eu fugiat
                                        nulla pariatur.
                                        </p>
                                    </div>
                                    
                                    <div className="testimonial-two-card-outer">
                                        <div className="testimonial-two-card-outer-title">
                                        <h5>Martin McLaughlin</h5>
                                        </div>
                                        
                                        <div className="testimonial-two-card-outer-title">
                                        <span> CEO Govrnx</span>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="testimonial-two-card-outer-icon">
                                        <i className="flaticon-quote" />
                                    </div>
                                    
                                    </div>
                                
                                </div>
                                
                                </SwiperSlide>
                                
                                <SwiperSlide className="swiper-slide">
                                <div className="testimonial-two-card">
                                    <div className="testimonial-two-card-content">
                                    <div className="testimonial-two-card-text">
                                        <p>
                                        You may be asked to work on many different types of
                                        papers within the government department.Sometimes you
                                        will be asked for short reading responses. Often, and
                                        sometimes more daunting, you’ll be assigned longer
                                        papers based on texts.
                                        </p>
                                    </div>
                                    
                                    <div className="testimonial-two-card-outer">
                                        <div className="testimonial-two-card-outer-title">
                                        <h5>Aleesha Brown</h5>
                                        </div>
                                        
                                        <div className="testimonial-two-card-outer-title">
                                        <span> CEO Govrnx</span>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="testimonial-two-card-outer-icon">
                                        <i className="flaticon-quote" />
                                    </div>
                                    
                                    </div>
                                
                                </div>
                                
                                </SwiperSlide>
                                
                                <SwiperSlide className="swiper-slide">
                                <div className="testimonial-two-card">
                                    <div className="testimonial-two-card-content">
                                    <div className="testimonial-two-card-text">
                                        <p>
                                        Writing an original research paper can be a daunting
                                        task, especially if lengthy papers intimidate you. For
                                        this one, especially, we stress communicating with
                                        your professor,who is here to walk you through this
                                        process!
                                        </p>
                                    </div>
                                    
                                    <div className="testimonial-two-card-outer">
                                        <div className="testimonial-two-card-outer-title">
                                        <h5>Kevin Martin</h5>
                                        </div>
                                        
                                        <div className="testimonial-two-card-outer-title">
                                        <span> CEO Govrnx</span>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="testimonial-two-card-outer-icon">
                                        <i className="flaticon-quote" />
                                    </div>
                                    
                                    </div>
                                
                                </div>
                                
                                </SwiperSlide>
                                
                            </div>
                        
                        </Swiper>
                    </div>
                    
                    </div>
                    
                    <div className="col-lg-3">
                    <div className="testimonial-two-img">
                        <img src={Testimonial01} alt="img-51" />
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
               
            </div>
        </section>
    </>
  )
}

export default Testimonialtwo