import React from 'react'
import Teamdeatils01 from '../../../assets/image/team/team-detail-1.jpg'

function First() {
  return (
    <>
        <section className="team-details-section">
            <div className="container">
                <div className="row justify-content-between">
                <div className="col-12 col-lg-6">
                    <div className="team-details-image">
                    <img src={Teamdeatils01} className="img-fluid" alt="img-93" />
                    <div className="team-details-name">kevin</div>
                    </div>
                </div>
                <div className="col-12 col-lg-5">
                    <div className="team-details-title-one">
                    <h2>Kevin Martin</h2>
                    <span>City Council President</span>
                    </div>
                   
                    <div className="team-details-socials">
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
                    
                    <div className="team-details-info">
                    <ul className="list-unstyled">
                        <li> Experiance: <span>26 years</span> </li>
                        <li>
                        Email:{" "}
                        <span>
                            <a href="mailto:company@gmail.com">company@gmail.com</a>
                        </span>
                        </li>
                        <li>
                        Phone:{" "}
                        <span>
                            <a href="tel:+92-8900-9800">+92 (8900) 9800</a>
                        </span>
                        </li>
                    </ul>
                   
                    </div>
                   
                    <div className="team-details-text">
                    <p>
                        Lorem ipsum dolor sit amet, con adipiscing elit tiam convallis elit
                        id impedie. Quisq commodo simply free ornare tortor.
                    </p>
                    </div>
                    
                    <div className="team-details-list">
                    <h3>Education</h3>
                    <div className="team-details-list-item">
                        <div className="row">
                        <div className="col-sm-12 col-lg-6 col-xl-6">
                            <div className="team-details-box">
                            <div className="team-details-year">1979 – 1983</div>
                            <h4 className="team-details-title">
                                Master of Political Science
                            </h4>
                            <p>Columbia University, CL</p>
                            </div>
                            
                        </div>
                        
                        <div className="col-sm-12 col-lg-6 col-xl-6">
                            <div className="team-details-box">
                            <div className="team-details-year">1984 - 1990</div>
                            <h4 className="team-details-title">
                                Master of Political Science
                            </h4>
                            <p>Columbia University, CL</p>
                            </div>
                            
                        </div>
                        
                        </div>
                       
                    </div>
                    
                    </div>
                    
                </div>
                </div>
               
            </div>
        </section>

        <section className="team-details-biography-section">
            <div className="container">
                <div className="row">
                <div className="col-12 col-lg-12">
                    <div className="team-details-biography-content">
                    <div className="team-details-title">
                        <h3>Biography</h3>
                    </div>
                    
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen vived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially
                        unchanged. Architecto beatae vitae dicta sunt explicabo.
                    </p>
                    </div>
                    
                </div>
                
                </div>
                
            </div>
        </section>

        <section className="team-progress-section">
            <div className="container">
                <h3>Professional Skills</h3>
                <div className="row row-gutter-y-30">
                <div className="col-lg-6">
                    <div className="team-progressbar-text">Crisis Management</div>
                    <div className="team-progressbar">
                        <div className="team-progressbar-inner count-box" data-percentage="90%" style={{width: "90%"}}>
                            <div className="team-progressbar-inner-text count-text ninty">90%</div>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-6">
                    <div className="team-progressbar-text">Problem Solving</div>
                    
                    <div className="team-progressbar">
                        <div className="team-progressbar-inner count-box" data-percentage="50%" style={{width: "50%"}} >
                            <div className="team-progressbar-inner-text count-text">50%</div>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-6">
                    <div className="team-progressbar-text">Public Speaking</div>
                    
                    <div className="team-progressbar">
                        <div className="team-progressbar-inner count-box" data-percentage="46%" style={{width: "46%"}}>
                            <div className="team-progressbar-inner-text count-text">46%</div>
                        </div>
                    </div> 
                </div>
               
                <div className="col-lg-6">
                    <div className="team-progressbar-text">Strategy Planning</div>
                    
                    <div className="team-progressbar">
                        <div className="team-progressbar-inner count-box" data-percentage="60%" style={{width: "60%"}}>
                            <div className="team-progressbar-inner-text count-text">60%</div>
                        </div>
                    </div>
                </div>
                </div>
               
            </div>
        </section>

        <section className="team-details-contact">
            <div className="container">
                <div className="row justify-content-md-center">
                <div className="align-self-center col-lg-8">
                    <div className="section-title-box text-center">
                    <div className="section-tagline">WRITE A MESSAGE</div>
                    
                    <h2 className="section-title">Contact with Me</h2>
                    </div>
                    
                </div>
                
                <div className="align-self-center col-lg-8">
                    <form action="assets/inc/sendemail.php" className="contact-form-one contact-form-validated" >
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
                       
                        <div className="col-12 col-lg-12 text-center">
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