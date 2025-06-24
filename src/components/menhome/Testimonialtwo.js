import React, { useState } from "react";
import Testimonial01 from "../../assets/image/testimonialone.jpg";
import Testimonial02 from "../../assets/image/testimonialtwo.jpg";
import Testimonial03 from "../../assets/image/testimonialthree.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs, FreeMode } from "swiper";

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

                    <h2 className="section-title rev">
                      What They’re Talking About GHI
                    </h2>
                    <p>
                      Discover how partners, residents, and investors are
                      experiencing the impact of GHI’s mission-driven, resilient
                      housing solutions firsthand.
                    </p>
                  </div>
                </div>

                <div className="testimonial-author-thumb">
                  <Swiper
                    className="swiper author-thumb-carousel"
                    slidesPerView={3}
                    spaceBetween={0}
                    modules={[FreeMode, Navigation, Thumbs]}
                    onSwiper={setThumbsSwiper}
                    freeMode={true}
                    watchSlidesProgress={true}
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div className="author-thumb-image">
                          <img
                            src={Testimonial01}
                            className="img-fluid"
                            alt="img-48"
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className="swiper-slide">
                        <div className="author-thumb-image">
                          <img
                            src={Testimonial02}
                            className="img-fluid"
                            alt="img-49"
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className="swiper-slide">
                        <div className="author-thumb-image">
                          <img
                            src={Testimonial03}
                            className="img-fluid"
                            alt="img-50"
                          />
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="testimonial-author-review">
                  <Swiper
                    className="swiper author-review-carousel"
                    spaceBetween={60}
                    slidesPerView={1}
                    loop={true}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    pagination={{
                      clickable: true,
                      el: ".swiper-pagination",
                    }}
                    modules={[Autoplay, Navigation, Thumbs, FreeMode]}
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div className="testimonial-two-card">
                          <div className="testimonial-two-card-content">
                            <div className="testimonial-two-card-text">
                              <p>
                                GHI’s approach is transformative. Their
                                PolyFRAME structures are not just homes—they're
                                hope for communities facing disaster and
                                displacement.
                              </p>
                            </div>

                            <div className="testimonial-two-card-outer">
                              <div className="testimonial-two-card-outer-title">
                                <h5>Maria Sanchez</h5>
                              </div>

                              <div className="testimonial-two-card-outer-title">
                                <span>Community Development Officer</span>
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
                                Partnering with GHI enabled us to scale
                                sustainable housing solutions faster than we
                                imagined. Their team is mission-driven,
                                innovative, and highly collaborative.
                              </p>
                            </div>

                            <div className="testimonial-two-card-outer">
                              <div className="testimonial-two-card-outer-title">
                                <h5>David Liu</h5>
                              </div>

                              <div className="testimonial-two-card-outer-title">
                                <span> City Housing Planner</span>
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
                                As an investor, I value returns with impact. GHI
                                delivers both—resilient infrastructure and
                                community equity. It's a powerful, future-ready
                                model.
                              </p>
                            </div>

                            <div className="testimonial-two-card-outer">
                              <div className="testimonial-two-card-outer-title">
                                <h5>Elena Brooks</h5>
                              </div>

                              <div className="testimonial-two-card-outer-title">
                                <span>mpact Investment Advisor</span>
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

              {/* <div className="col-lg-3">
                <div className="testimonial-two-img">
                  <img src={Testimonial01} alt="img-51" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonialtwo;
