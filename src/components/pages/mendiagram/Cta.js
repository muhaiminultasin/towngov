import React from 'react'
import { Link } from 'react-router-dom'
import Event02 from '../../../assets/image/event/event-2.jpg'
import Event03 from '../../../assets/image/event/event-3.jpg'
import Event04 from '../../../assets/image/event/event-4.jpg'


function Cta() {
  return (
    <>
        <section className="cta-three">
            <div className="cta-three-inner">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="cta-three-content text-center">
                        <h2 className="section-title text-white">
                            City Goverment Offers a Wide <br /> Range of Online Services
                        </h2>
                        <Link to="/contact" className="btn btn-primary"> Discover More{" "} </Link>
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Cta