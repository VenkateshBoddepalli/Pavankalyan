import React from "react";
import { Link } from "react-router-dom";
import "./mystyle.module.css";

function About() {
  return (
    <main>
      <section className="section primary-background-dark">
        <div className="section-center about-section">
          <artical className="about-content">
            <h1>
              Party name is
              <br />
              <span>Jana Sena or Jana Sena Party (JSP)</span>
            </h1>
            <p>
              On 12 March 2014, Pawan Kalyan submitted the application to
              register the party name. Kalyan formally launched the party at
              the HITEC City business district in Madhapur, Hyderabad, on 14
              March with a massive meeting. This was followed by another
              public gathering and meeting in Vizag where he launched his book
              Ism. The party was approved by the Election Commission on 11
              December 2014.
            </p>
            <a className="button-global" href="https://www.janasenaparty.org/">
              Click More
            </a>
          </artical>

          <artical className="about-img-container">
            <div className="out-div">
              <img
                className="about-main-image"
                src="https://e0.pxfuel.com/wallpapers/840/984/desktop-wallpaper-johnbandi-on-john-pspk-power-star-pawan-kalyan-janasena-party-thumbnail.jpg"
                />
            </div>
            <div className="in-div">
              <img
                className="about-small-image"
                src=" https://e0.pxfuel.com/wallpapers/15/570/desktop-wallpaper-janasena-party-symbol-a-fist-that-fights-power-star-kalyan-thumbnail.jpg"
                />
             
            </div>
          </artical>
        </div>
      </section>
    </main>
  );
}

export default About;
