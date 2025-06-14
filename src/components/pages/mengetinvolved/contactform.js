import React from 'react'


function First() {
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
                    
                    <form action="assets/inc/sendemail.php" className="contact-form  contact-form-validated"
                    method="post" >
                    <div className="row row-gutter-10">
                        <div className="col-12 col-lg-6">
                        <input type="text" id="name" className="input-text" placeholder="Your name" name="name" aria-required="true" />
                        </div>
                        
                        <div className="col-12 col-lg-6">
                        <input type="email" id="email" className="input-text" placeholder="Email address" name="email" aria-required="true" />
                        </div>
                        
                        <div className="col-12 col-lg-6">
                         <input type="text" id="phone" className="input-text" placeholder="Phone number" name="phone" aria-required="true" />
                        </div>
                        
                        <div className="col-12 col-lg-6">
                            <input type="text" id="subject" className="input-text" placeholder="Subject" name="subject" aria-required="true" />
                        </div>
                        
                        <div className="col-12 col-lg-12">
                        <textarea name="message" placeholder="Write a message" className="input-text" aria-required="true" defaultValue={""} />
                        </div>
                       
                        <div className="col-12 col-lg-12">
                            <button className="btn btn-primary">Send a Message</button>
                        </div>
                       
                    </div>
                    </form>
                  
                </div>
                </div>
            </div>
        </section>


    </>
  )
}

export default First