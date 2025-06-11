import React , {useEffect} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import Footer from '../components/Footer/Main'
import Pageabout from '../components/pages/about/Main'
import Team from '../components/pages/team/Main'
import Teamdeatils from '../components/pages/Teamdeatils/Main'
import Portfolio from '../components/pages/Portfolio/Main'
import Portfoliodeatils from '../components/pages/portfoliodeatils/Main'
import Causes from '../components/pages/causes/Main'
import Causesdeatils from '../components/pages/causesdeatils/Main' 
import Services from '../components/pages/services/Main'
import Servicesdeatils from '../components/pages/servicesdeatils/Main'
import Departments from '../components/pages/departments/Main'
import Departmentdetails from '../components/pages/departmentdeatils/Main'
import Events from '../components/pages/events/Main'
import Eventdeatils from '../components/pages/eventsdeatils/Main'
import News from '../components/pages/News/Main'
import Newsdeatils from '../components/pages/newsdeatils/Main'
import Contact from '../components/contact/Main'
import Home from '../components/home/Main'
import Donate from '../components/pages/Donatepge/DonatePage';
import FAQ from '../components/pages/faq/Main'
import Supportus from '../components/pages/supportus/Main';
import Ourmodel from '../components/pages/ourmodel/Main'
import Diagram from '../components/pages/diagram/Main'
import Ghi from '../components/pages/ghi/Main'
import Npt from '../components/pages/npt/Main'
import Uvi from '../components/pages/uvi/Main'
import Affordablehousingdevelopment from '../components/pages/affordablehousingdevelopment/Main'
import Polyframebuildingsystem from '../components/pages/polyframebuildingsystem/Main'
import Sustainablevillages from '../components/pages/sustainablevillages/Main'
import Citygovernment from '../components/pages/citygovernment/Main'
import Missionstatement from '../components/pages/missionstatement/Main'
import Getinvolved from '../components/pages/getinvolved/Main'
// *********************
// Test Run 
// **********************

// import Home2 from '../components/hometwo/Main'


function Index() {

  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    window.scroll(0, 0)
}, [path]);

  return (
    <>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Pageabout />} />
          <Route path="/team" element={<Team />} />
          <Route path="/teamdetails" element={<Teamdeatils />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfoliodeatils" element={<Portfoliodeatils />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/causedetails" element={<Causesdeatils />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicedetails" element={<Servicesdeatils />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departmentdetails" element={<Departmentdetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventdetails" element={<Eventdeatils />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsdetails" element={<Newsdeatils />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/supportus" element={<Supportus />} />
          <Route path="/ourmodel" element={<Ourmodel />} />
          <Route path="/diagram" element={<Diagram />} />
          <Route path="/get-involved" element={<Getinvolved />} />
          <Route path="/ghi" element={<Ghi />} />
          <Route path="/npt" element={<Npt />} />
          <Route path="/uvi" element={<Uvi />} />
          <Route path="/affordable-housing-development" element={<Affordablehousingdevelopment />} />
          <Route path="/polyframe-building-system" element={<Polyframebuildingsystem />} />
          <Route path="/sustainable-urban-villages" element={<Sustainablevillages />} />
          <Route path="/city-government-partnerships" element={<Citygovernment />} />
          <Route path="/mission-statement" element={<Missionstatement />} />
          {/* <Route path="/home2" element={<Home2 />} /> */}


        </Routes>

        {path !== "/" && <Footer />}
    </>
  )
}

export default Index;