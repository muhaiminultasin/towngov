import React from 'react'
import { Link } from 'react-router-dom'

function Main( { subtitle, title, subtitledown } ) {
  return (
    <>
        <section className="page-banner">
            <div className="container">
                <div className="page-breadcrumbs">
                <ul className="list-unstyled">
                    <li>
                    <Link to="/"> {subtitle} </Link>
                    </li>
                    <li> {title} </li>
                </ul>
                
                </div>
              
                <div className="page-banner-title">
                   <h3> {subtitledown} </h3>
                </div>   
            </div>
        </section>
    </>
  )
}

export default Main