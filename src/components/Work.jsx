import {React, useState} from "react";
import "../styles/Resume.css";
export default function Work(){
    return(
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
      </section>
    );
}