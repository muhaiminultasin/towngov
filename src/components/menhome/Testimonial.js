import React, {useState} from 'react'
import Testimonial02 from '../../assets/image/testimonialone.jpg'
import Testimonial03 from '../../assets/image/testimonialtwo.jpg'
import Testimonial04 from '../../assets/image/testimonialthree.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation,Thumbs,FreeMode ,Pagination} from "swiper";


function Testimonial() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
      
  return (
    <>
        <section className="testimonial-section">
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
                    speed={500} 
                    modules={[Autoplay, Navigation,Thumbs,FreeMode,Pagination ]} >
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
                                    GHI’s approach is transformative. Their PolyFRAME structures are not just homes—they're hope for communities facing disaster and displacement.
                                </div>
                                
                                <div className="testimonial-thumb-card">
                                    <h5>Maria Sanchez</h5>
                                    <span>Community Development Officer</span>
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
                                    Partnering with GHI enabled us to scale sustainable housing solutions faster than we imagined. Their team is mission-driven, innovative, and highly collaborative.
                                </div>
                                
                                <div className="testimonial-thumb-card">
                                    <h5>David Liu</h5>
                                    <span>City Housing Planner</span>
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
                                   As an investor, I value returns with impact. GHI delivers both—resilient infrastructure and community equity. It's a powerful, future-ready model.
                                </div>
                                
                                <div className="testimonial-thumb-card">
                                    <h5>Elena Brooks</h5>
                                    <span>Impact Investment Advisor</span>
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
                                <img src={Testimonial02} className="img-fluid" alt="img-17" />
                                <i className="fa-solid fa-quote-left" />
                            </SwiperSlide>
                        
                            <SwiperSlide className="swiper-slide">
                                <img src={Testimonial03} className="img-fluid" alt="img-18" />
                                <i className="fa-solid fa-quote-left" />
                            </SwiperSlide>
                        
                            <SwiperSlide className="swiper-slide">
                                <img src={Testimonial04} className="img-fluid" alt="img-19" />
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