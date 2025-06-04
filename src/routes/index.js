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
import Comingsoon from '../components/pages/Comingsoon/Comingsoon';


function Index() {

  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    window.scroll(0, 0)
}, [path]);

  return (
    <>

        <Routes>

          <Route path="/home" element={<Home />} />
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
          <Route path="/" element={<Comingsoon />} />


        </Routes>

        {path !== "/" && <Footer />}
    </>
  )
}

export default Index;