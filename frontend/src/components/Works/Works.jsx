import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Java from "../../img/java.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Next from "../../img/next.jpeg";
import ReactLogo from "../../img/react.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import MongoDb from "../../img/mongo.png";
import Mysql from "../../img/mysql.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* Dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>My Work with</span>
          <span>Brands & Clients</span>
          <span>
            I've had the privilege to work with a diverse range of clients and
            brands,<br/> providing tailored solutions to meet their unique needs.<br/> My
            expertise includes web and mobile app development, e-commerce
            solutions, and more.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img width="100%" src={MongoDb} alt="" />
          </div>
          
          <div className="w-secCircle">
            <img width="100%" src={ReactLogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img width="100%" src={Java} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img width="100%" src={Next} alt="" />
          </div>
          <div className="w-secCircle">
            <img width="100%" src={Mysql} alt="" />
          </div>
       
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
