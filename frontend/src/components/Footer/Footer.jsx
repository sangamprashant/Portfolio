import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>srivastavprashant.ps.official@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/sangam_prashant/" target="_balank">   <Insta color="white" size={"3rem"} /> </a>
        <a href="http://github.com/sangamprashant" target="_balank">   <Gitub color="white" size={"3rem"} /> </a>
        <a href="https://www.linkedin.com/in/sangamprashantsrivastav/" target="_balank">  <Linkedin color="white" size={"3rem"} /> </a>          
        </div>
      </div>
    </div>
  );
};

export default Footer;
