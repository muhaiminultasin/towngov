import React from 'react'
import { Link } from 'react-router-dom'
import Deatils from '../../../assets/image/services/service-details-1.jpg'

function First() {
  return (
    <>
        <section className="service-details-section">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="service-details-image">
                    <img src={Deatils} className="img-fluid" alt="img-146" />
                    </div>
                    
                    <div className="service-details-content-box">
                    <h3 className="service-details-title">Jobs and Unemplyment</h3>
                    <p>
                        There are many variations of passages of lorem ipsum is simply free
                        text available in the market, but the majority time you put aside to
                        be in our office. Lorem ipsum dolor sit amet, consectetLorem ipsum
                        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                    </p>
                    <h4>
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                        autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                        nihil molestiae consequatur.
                    </h4>
                    <p>
                        Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur iste
                        natus error sit voluptatem accusantium totam rem aperiam, eaque ipsa
                        quae.
                    </p>
                    </div>
                   
                    <h2 className="service-details-title">Goverment Jobs Fecilities:</h2>
                    <ul className="list-unstyled list-style-two">
                    <li>
                        <i className="fa-solid fa-circle-arrow-right" />
                        <h5>
                        Every pleasure is to be welcomed &amp; every pain get avoided.
                        </h5>
                    </li>
                    
                    <li>
                        <i className="fa-solid fa-circle-arrow-right" />
                        <h5>
                        Laborious physical exercise, except to obtain some advantage from.
                        </h5>
                    </li>
                    
                    <li>
                        <i className="fa-solid fa-circle-arrow-right" />
                        <h5>Quisque tincidunt eros ac place viverra simply free text.</h5>
                    </li>
                    
                    </ul>
                    
                    <div className="service-details-box-inner">
                    <div className="row g-0">
                        <div className="col-lg-6">
                        <div className="service-details-box">
                            <div className="service-details-icon">
                            <Link to="/servicedetails">
                                <i className="flaticon-team" />
                            </Link>
                            </div>
                            
                            <div className="service-details-content">
                            <h4>
                                <Link to="/servicedetails">Proin Tempus</Link>
                            </h4>
                            <p>
                                There are many of of lorem Ipsum, but the majori have
                                suffered alteration in some form.
                            </p>
                            </div>
                            
                        </div>
                        
                        </div>
                        
                        <div className="col-lg-6">
                        <div className="service-details-box">
                            <div className="service-details-icon">
                            <Link to="/servicedetails">
                                <i className="flaticon-art" />
                            </Link>
                            </div>
                            
                            <div className="service-details-content">
                            <h4>
                                <Link to="/servicedetails">Proin Tempus</Link>
                            </h4>
                            <p>
                                There are many of of lorem Ipsum, but the majori have
                                suffered alteration in some form.
                            </p>
                            </div>
                            
                        </div>
                        
                        </div>
                        
                    </div>
                    
                    </div>
                    
                    <p>
                    There are many variations of passages of lorem ipsum is simply free
                    text available in the market, but the majority time you put aside to
                    be in our office. Lorem ipsum dolor sit amet, consectetLorem ipsum
                    dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                    </p>
                </div>
                
                <div className="col-12 col-lg-4 col-xl-4">
                    <div className="sidebar">
                    <div className="sidebar-widget-list-inner">
                        <ul>
                        <li>
                            <Link to="/servicedetails">
                            Your Goverment
                            <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/servicedetails">
                            Jobs and Unemployment{" "}
                            <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/servicedetails">
                            Business and Industry
                            <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/servicedetails">
                            Roads &amp; Transportation
                            <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/servicedetails">
                            Culture &amp; Recreation
                            <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/servicedetails">
                            Education and skills
                            <i className="fa-solid fa-arrow-right-long" />
                            </Link>
                        </li>
                        </ul>
                        
                    </div>
                   
                    <div className="sidebar-widget sidebar-widget-card">
                        <div className="sidebar-widget-card-icon">
                        <i className="flaticon-question" />
                        </div>
                        
                        <div className="sidebar-widget-card-content">
                        <h3>
                            <Link to="/contact">Get Any Help?</Link>
                        </h3>
                        <p>
                            There are many variations of passages of lorem ipsum is simply
                            free text available in the marke.
                        </p>
                        </div>
                        
                    </div>
                    
                    <div className="sidebar-widget">
                        <div className="sidebar-widget-box-icon">
                        <i className="flaticon-pdf" />
                        </div>
                        
                        <div className="sidebar-widget-box-content">
                        <h3>
                            Company briefing update of the <br /> 2022 year
                        </h3>
                        <Link className="btn btn-primary">Download</Link>
                        </div>
                        
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default First