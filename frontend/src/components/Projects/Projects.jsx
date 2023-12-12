import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Projects.css"; // Import your CSS file
import { Swiper, SwiperSlide } from "swiper/react";

function Projects() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`portfolio ${darkMode ? "dark-mode" : ""}`} id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider">
      <SwiperSlide >
          <img src="https://imgs.search.brave.com/IA-a4lUg47kM0FW6vtr7Lz_eIaEWKTc1EHlAv1FFPVg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w" alt="" />
          <h5>Project Name</h5>
          <p>Project Description</p>
          <div>
            <button>Git</button>
            <button>Project Link</button>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://imgs.search.brave.com/IA-a4lUg47kM0FW6vtr7Lz_eIaEWKTc1EHlAv1FFPVg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w" alt="" />
          <h5>Project Name</h5>
          <p>Project Description</p>
          <div>
            <button>Git</button>
            <button>Project Link</button>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://imgs.search.brave.com/IA-a4lUg47kM0FW6vtr7Lz_eIaEWKTc1EHlAv1FFPVg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w" alt="" />
          <h5>Project Name</h5>
          <p>Project Description</p>
          <div>
            <button>Git</button>
            <button>Project Link</button>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://imgs.search.brave.com/IA-a4lUg47kM0FW6vtr7Lz_eIaEWKTc1EHlAv1FFPVg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w" alt="" />
          <h5>Project Name</h5>
          <p>Project Description</p>
          <div>
            <button>Git</button>
            <button>Project Link</button>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://imgs.search.brave.com/IA-a4lUg47kM0FW6vtr7Lz_eIaEWKTc1EHlAv1FFPVg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YS1kcm9wLW9mLXBp/bmstYW5kLXllbGxv/dy1wYWludC1pbi13/YXRlci5qcGc_d2lk/dGg9MTAwMCZmb3Jt/YXQ9cGpwZyZleGlm/PTAmaXB0Yz0w" alt="" />
          <h5>Project Name</h5>
          <p>Project Description</p>
          <div>
            <button>Git</button>
            <button>Project Link</button>
          </div>
        </SwiperSlide>
        
      </Swiper>
        
        {/* Add more cards as needed */}
     
    </div>
  );
}

export default Projects;
