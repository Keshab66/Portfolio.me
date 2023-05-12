import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Welcome,
         <br /> <span className="info-name">Keshaba Pradhan</span>.
         <br />Mern-stack Developer
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/coding.png")}
            className="picture"
         alt="coding" />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;