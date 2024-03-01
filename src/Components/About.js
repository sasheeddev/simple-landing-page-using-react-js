import React from "react";
import AboutBackground from "../Assets/work.png";
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      


      <div className="about-section-text-container">
        <p className="primary-subheading">About Us</p>
        <h1 className="primary-heading">
          We are professional web developing team with more than 5 years experience
        </h1>
        <p className="primary-text">
          We ,thrimana are one of the best web developing team in field for five years
        </p>
        <p className="primary-text">
          Give your idea to us and we build that into reality
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
