import React from 'react'
import { Link } from 'react-router-dom'

function Last() {
  return (
    <>
        <section className="cta-one">
            <div className="cta-one-inner">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="cta-one-content text-center">
                        <h2 className="section-title text-white">
                        It’s a Great way to Love and
                        <br /> Support your City
                        </h2>
                        <Link to="/donate" className="btn btn-primary"> Start Donating Now </Link>
                    </div>
                    
                    </div>
                    
                </div>
                
                </div>
            
            </div>
        </section>
    </>
  )
}

export default Last