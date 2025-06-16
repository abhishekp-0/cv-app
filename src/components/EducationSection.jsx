import "../styles/Resume.css";
import WorkEduList from "./WorkEduList";
import EduForm from "./EduForm";
import { useState } from "react";
export default function EducationSection(){
    const ItemsList=[{title:"London City University", subtitle:"Bachelors in Economics", startDate:"08/2020", endDate:"present", location:"New York City, US"},{title:"Hidden University", subtitle:"Master's Degree in Math", startDate:"08/2020",endDate:"present",location:"New York City, US"}];

    const [editing,setEditing]=useState(false);
    function handleAdd(){
        setEditing(!editing);
    }

    return(editing?
    <div className="section">
        <h2>Education</h2>
        <EduForm />
    </div>
    :
    <div className="section">
        <h2>Education</h2>
        <WorkEduList ItemsList={ItemsList}/>
        <button onClick={handleAdd}>ADD EDUCATION</button>
    </div>
    );
}