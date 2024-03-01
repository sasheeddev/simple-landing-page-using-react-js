import React from "react";
import lms from "../Assets/lms.png";
import hotel from "../Assets/hotel.png";
import ecom from "../Assets/ecom.png";

const Work = () => {
  const workInfoData = [
    {
      image: lms,
      title: "LMS System",
      text: "This projects helps to manage whole educational institute in online platform",
    },
    {
      image: hotel,
      title: "Hotel web site",
      text: " This makes good presence for your hotel ",
    },
    {
      image: ecom,
      title: "E-commerce web site",
      text: "E-commerce website which helps to buying and sellings",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Our projects</p>
        <h1 className="primary-heading">These are few of them</h1>
        <p className="primary-text">
          For five years in this field , we have finished many web developing projects for many companies in various fields
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
