import React, { useState } from 'react'
import Testimonial02 from '../../../assets/image/testimonial/testimonial-2.jpg'
import Testimonial03 from '../../../assets/image/testimonial/testimonial-3.jpg'
import Testimonial04 from '../../../assets/image/testimonial/testimonial-4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,Thumbs,FreeMode ,Pagination} from "swiper";

function Testimonial() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null); 

  return (
    <>
        <section className="testimonial-section testimonial-box-one">
            <div className="container">
                <div className="testimonial-name">TESTIMONIALS</div>

                    <div className="testimonial-slider">

                        <Swiper className="swiper testimonial-reviews"
                                spaceBetween={60} 
                                slidesPerView={1} 
                                loop={true} 
                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                pagination={{
                                    clickable: true,
                                    el: ".swiper-pagination"
                                  }}
                                speed={500}  modules={[Autoplay, Navigation,Thumbs,FreeMode,Pagination ]} >
                            <div className="swiper-wrapper">

                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-content">
                                    <div className="testimonial-ratings">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                    </div>
                                    
                                    <div className="testimonial-text">
                                        This is due to their excellent service, competitive pricing and
                                        customer support. It’s throughly refresing to get such a
                                        personal touch. Duis aute lorem ipsum is simply free text irure
                                        dolor in reprehenderit in esse nulla pariatur.
                                    </div>
                                    
                                    <div className="testimonial-thumb-card">
                                        <h5>Martin McLaughlin</h5>
                                        <span>Customer</span>
                                    </div>
                                
                                    </div>
                                
                                </SwiperSlide>
                                
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-content">
                                    <div className="testimonial-ratings">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                    </div>
                                    
                                    <div className="testimonial-text">
                                        This is due to their excellent service, competitive pricing and
                                        customer support. It’s throughly refresing to get such a
                                        personal touch. Duis aute lorem ipsum is simply free text irure
                                        dolor in reprehenderit in esse nulla pariatur.
                                    </div>
                                    
                                    <div className="testimonial-thumb-card">
                                        <h5>Aleesha Brown</h5>
                                        <span>Customer</span>
                                    </div>
                                
                                    </div>
                                
                                </SwiperSlide>
                                
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-content">
                                    <div className="testimonial-ratings">
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                    </div>
                                    
                                    <div className="testimonial-text">
                                        This is due to their excellent service, competitive pricing and
                                        customer support. It’s throughly refresing to get such a
                                        personal touch. Duis aute lorem ipsum is simply free text irure
                                        dolor in reprehenderit in esse nulla pariatur.
                                    </div>
                                    
                                    <div className="testimonial-thumb-card">
                                        <h5>Kevin Martin</h5>
                                        <span>Member</span>
                                    </div>
                                
                                    </div>
                                
                                </SwiperSlide>
                            
                            </div>
                        
                            <div className="swiper-pagination" />
                        </Swiper>
                    
                        <Swiper className="testimonial-thumb" 
                                slidesPerView={3} 
                                spaceBetween={0}
                                modules={[FreeMode, Navigation, Thumbs]}
                                onSwiper={setThumbsSwiper}
                                freeMode={true}
                                watchSlidesProgress={true} >

                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <img src={Testimonial02} className="img-fluid" alt="img-64" />
                                    <i className="fa-solid fa-quote-left" />
                                </SwiperSlide>
                                
                                <SwiperSlide className="swiper-slide">
                                    <img src={Testimonial03} className="img-fluid" alt="img-65" />
                                    <i className="fa-solid fa-quote-left" />
                                </SwiperSlide>
                                
                                <SwiperSlide className="swiper-slide">
                                    <img src={Testimonial04} className="img-fluid" alt="img-66" />
                                    <i className="fa-solid fa-quote-left" />
                                </SwiperSlide>
                            </div>
                        
                        </Swiper>
                
                    </div>
                
            </div>
        </section>

    </>
  )
}

export default Testimonial