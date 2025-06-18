import React from "react";
import "../../styles/Resume.css";
import Item from "./Item.jsx";

export default function Education({eduList}) {
    return (
        <section className="resume-section education-info">
            <h3 className="section-title">Education</h3>
            {eduList.map((edu, index) => (
                <Item key={index} itemInfo={edu} />
            ))}
        </section>
    );
}