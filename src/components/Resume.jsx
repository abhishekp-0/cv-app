import React from "react";
import "../styles/Resume.css"; // Import the CSS file
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
const Resume = () => {
  return (
    <div className="resume-container">
      <header className="resume-header contact-info">
        <h1>Josephine Meyers</h1>
        <p>
          <span><FaEnvelope /> josephine.meyers@mail.co.uk</span>
          <span><FaPhoneAlt /> +44 3245 5521 5521</span>
          <span><FaMapMarkerAlt /> London, UK</span>
        </p>
      </header>

      <section className="resume-section education-info">
        <h3 className="section-title">Education</h3>
        <div className="section-item">
          <div className="item-dates">
            <p>08/2020 – present</p>
            <p>New York City, US</p>
          </div>
          <div className="item-details">
            <h3>London City University</h3>
            <p>Bachelors in Economics</p>
          </div>
        </div>
      </section>

      <section className="resume-section work-info">
        <h3 className="section-title">Professional Experience</h3>
        <div className="section-item">
          <div className="item-dates">
            <p>08/2020 - present</p>
            <p>New York City, US</p>
          </div>
          <div className="item-details">
            <h3>Umbrella Inc.</h3>
            <p><strong>UX & UI Designer</strong></p>
            <p>
              Designed and prototyped user interface patterns for various clients in various industries, 
              ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android.
            </p>
          </div>
        </div>

        <div className="section-item">
          <div className="item-dates">
            <p>04/2018 – 02/2019</p>
            <p>Berlin, Germany</p>
          </div>
          <div className="item-details">
            <h3>Black Mesa Labs</h3>
            <p><strong>UX Research Assistant</strong></p>
            <p>
              Supported senior researchers on accessibility standards for the open web. Created and 
              usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Resume;
