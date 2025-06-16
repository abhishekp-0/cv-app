import {React, useState} from "react";
import "../styles/Resume.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
export default function GeneralInfo(){
    return(
        <header className="resume-header contact-info">
            <h1>Josephine Meyers</h1>
            <p>
              <span><FaEnvelope /> josephine.meyers@mail.co.uk</span>
              <span><FaPhoneAlt /> +44 3245 5521 5521</span>
              <span><FaMapMarkerAlt /> London, UK</span>
            </p>
        </header>
    );
}