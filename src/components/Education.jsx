import {React, useState} from "react";
import "../styles/Resume.css";
export default function Education() {
    return (
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
    );
}