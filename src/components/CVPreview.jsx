import {React, useState} from "react";
import "../styles/Resume.css"; // Import the CSS file
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Education from "./Education.jsx";
import Work from "./Work.jsx";
import GeneralInfo from "./GeneralInfo.jsx";
export default function CVPreview() {
    return (
        <div className="resume-container">
            <GeneralInfo/>
            <Education/>
            <Work/>
        </div>
    );
}
