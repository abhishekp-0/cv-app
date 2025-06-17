import {React, useState} from "react";
import "../styles/Resume.css";
import Item from "./Item.jsx";
export default function Work({workList}){
    return(
        <section className="resume-section work-info">
        <h3 className="section-title">Professional Experience</h3>
        {workList.map((workInfo, index) => (
            <Item key={index} itemInfo={workInfo} />
        ))}
      </section>
    );
}