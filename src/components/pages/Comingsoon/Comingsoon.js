import React,{useEffect} from "react";
import coming from '../../../assets/image/coming-soon.jpg'

const Comingsoon = () => {

      useEffect(() => {
        document.getElementById("title").innerHTML="Coming Soon || TownGov";
      }, [])

  return (
    <section className="coming-soon"  style={{
        backgroundImage: `url(${coming})`,
      }}>
      <div>
        {/* <div className="logo">
          <img src="/logo.png" alt="Global housing initiative" className="logo-img" />
        </div> */}
        <div className="content">
          <p className="subtitle">
           Global Housing initiative
          </p>
          <h1 className="title">COMING <br></br> SOON</h1>
          A transformative mission to provide safe, affordable, and sustainable housing solutions for communities worldwide. Stay tuned as we build a better future—one home at a time.
        </div>
      </div>

    </section>
  );
};

export default Comingsoon;
