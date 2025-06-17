import "../styles/Resume.css";
import WorkEduList from "./WorkEduList";
import EduForm from "./EduForm";
import { useState } from "react";
export default function EducationSection({eduList, onUpdate}){
    function handleAdd(){
        setEditing(!editing);
    }

    return(editing ?
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