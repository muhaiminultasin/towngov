import React from 'react'
import Accordion from './Accordion'

function Accordionsection() {


     const QS = [
        {
            id: 1,
            title: "What makes GHI different?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            title: "What’s unique about PolyFRAME?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 3,
            title: "How to invest or join UVI?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 4,
            title: "Steps to partner with GHI?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 5,
            title: "How Do I Get Paid for My Music?",
            ans: "Nowadays most of your revenue will come from streaming services. We take 20% and give 80%."
        }
    ];



  return (
    <>
        <section className="contact-section">
            <div className="container">
                <div className="row">
                <div className="col-lg-4">
                    <div className="contact-box">
                    <div className="section-tagline">WRITE A MESSAGE</div>
                    
                    <h1 className="section-title">Always Here to Help you</h1>
                    <p>
                        There are certain attributes of a profession and one has to catch
                        hold of them in order to efficiently and grow in that business. I
                        share my experience as an interior designer.{" "}
                    </p>
                    </div>
                   
                </div>
               
                <div className="col-lg-8">
                   <section className="faq-section">
  <div className="faq-container">
    <div>
      

      <div className="faq-list">
        {QS.map(({ id, title, ans }) => (
          <Accordion key={id} ques={title} ans={ans} />
        ))}
      </div>
    </div>
  </div>
</section>

                </div>
                </div>
            </div>
        </section>


        {/* <div className="contact-gmap-section">
            <div className="container">
            <div className="responsive-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12083.735079362054!2d-74.01702461732008!3d40.785470167558394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258131938b8d5%3A0xe39c30a8afef2d96!2sWest%20New%20York%2C%20NJ%2007093%2C%20USA!5e0!3m2!1sen!2sin!4v1668832966742!5m2!1sen!2sin"
                width={600} height={450} title="latest" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            
            </div>
   
        </div>

        <div className="cta-four-section">
            <div className="container">
            <div className="cta-four-inner">
                <div className="row row-gutter-y-20 ">
                <div className="col-12 col-lg-6 col-xl-3">
                    <div className="cta-four-content">
                    <i className="flaticon-help" />
                    <div className="cta-four-content-box">
                        <span>Have Question?</span>
                        <p>Free +92 (8800) 6802</p>
                    </div>
                    
                    </div>
                   
                </div>
               
                <div className="col-12 col-md-6 col-lg-6 col-xl-3">
                    <div className="cta-four-content">
                    <i className="flaticon-envelope-3" />
                    <div className="cta-four-content-box">
                        <span>Write Email</span>
                        <p>needhelp@company.com</p>
                    </div>
                    
                    </div>
                   
                </div>
               
                <div className="col-12 col-lg-6 col-xl-4">
                    <div className="cta-four-content">
                    <i className="flaticon-location-pin" />
                    <div className="cta-four-content-box">
                        <span>Visit Office</span>
                        <p>30 Broklyn Golden Street. USA</p>
                    </div>
                    
                    </div>
                   
                </div>
               
                <div className="col-12 col-lg-6 col-xl-2">
                    <div className="cta-four-content">
                    <div className="cta-four-widget-socials">
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
            
        </div> */}

    </>
  )
}

export default Accordionsection