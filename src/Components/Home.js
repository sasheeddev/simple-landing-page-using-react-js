import React from 'react';
import Navbar from './Navbar';
import banerbackground from '../Assets/topbackground.png';
import cover_logo from '../Assets/cover.png' ;
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={banerbackground} alt=''/>
        </div>

        <div className="home-text-section">
          <h1 className="primary-heading">
            We make your online presence
          </h1>
          <p className="primary-text">
            Our talented team do all desiging , developing of your product
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={cover_logo} alt="" />
        </div> 

      </div>

 

    </div>
    
   
   
  )
}

export default Home


