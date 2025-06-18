import {React, useState} from "react";
import "../../styles/Resume.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
export default function GeneralInfo({generalInfo}){
    return(
        <header className="resume-header contact-info">
            <h1>{generalInfo.name}</h1>
            <p>
              <span><FaEnvelope /> {generalInfo.email}</span>
              <span><FaPhoneAlt /> {generalInfo.phone}</span>
              <span><FaMapMarkerAlt /> {generalInfo.location}</span>
            </p>
        </header>
    );
}