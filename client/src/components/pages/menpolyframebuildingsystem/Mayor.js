import React from 'react'
import Shapes01 from '../../../assets/image/shapes/shape-1.png'
import Gallery01 from '../../../assets/image/gallery/mayor-2.jpg'


function Mayor() {
  return (
    <>
        <section className="mayor-section">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="mayor-box">
                    <div className="section-title-box">
                        <div className="section-tagline">MAYOR OF GOWRNX</div>
                        <h2 className="section-title">Major Voice of City Government</h2>
                        <p>
                        There cursus massa at urnaaculis estie. Sed aliquamellus vitae
                        ultrs condmentum leo massa mollis estiegittis miristum nulla sed
                        medy fringilla vitae.
                        </p>
                    </div>
                    <div className="mayor-icon-box">
                        <div className="mayor-icon">
                        <i className="flaticon-professor" />
                        </div>
                       
                        <h4 className="mayor-icon-title">
                        Meet Ideological Leader for Youth Generation
                        </h4>
                    </div>
                    
                    <ul className="list-unstyled list-style-one">
                        <li>
                        <i className="fa-solid fa-circle-check" />
                        <p>Making this the first true generator on the Internet</p>
                        </li>
                       
                        <li>
                        <i className="fa-solid fa-circle-check" />
                        <p>Lorem Ipsum is not simply random text</p>
                        </li>
                       
                        <li>
                        <i className="fa-solid fa-circle-check" />
                        <p>If you are going to use a passage</p>
                        </li>
                       
                    </ul>
                    
                    </div>
                    
                </div>
                
                <div className="col-lg-6">
                    <div className="mayor-img">
                    <img src={Shapes01} className="floated-image-one" alt="img-7" />
                    <img src={Gallery01} alt="img-8" />
                    <div className="mayor-name">Mr. Kevin Martin</div>     
                </div>
                    
                </div>
                
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Mayor