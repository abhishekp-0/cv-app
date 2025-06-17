import "../styles/Form.css";
import GeneralInfoForm from "./GeneralInfoForm.jsx";
import EducationSection from "./EducationSection.jsx";
import WorkSection from "./WorkSection.jsx";
export default function CVForm({onUpdate, cvData}){
    return(
        <div className="CVForm-container">
            <GeneralInfoForm generalInfo={cvData.generalInfo} onUpdateGenI={onUpdate}/>
            <EducationSection eduList={cvData.education} onUpdate={onUpdate}/>
            <WorkSection workList={cvData.workExperience} onUpdate={onUpdate}/>
        </div>
    );
}