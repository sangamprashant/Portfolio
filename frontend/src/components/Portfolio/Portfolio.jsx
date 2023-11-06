import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Slide1 from "../../img/Slide1.JPG";
import Slide2 from "../../img/Slide2.JPG";
import Slide3 from "../../img/Slide3.JPG";
import Slide4 from "../../img/Slide4.JPG";
import Slide5 from "../../img/Slide5.jpg";
import Slide6 from "../../img/Slide6.JPG";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={Slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} alt="" />
        </SwiperSlide>
       
        <SwiperSlide>
          <img src={Slide6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
