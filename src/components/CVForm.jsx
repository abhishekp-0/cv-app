import "../styles/Form.css";
import GeneralInfoForm from "./GeneralInfoForm.jsx";
import EducationSection from "./EducationSection.jsx";
import WorkSection from "./WorkSection.jsx";
export default function CVForm({onUpdate, cvData}){

    function onUpdateGenInfo(newGeneralInfo) {
        onUpdate({
            ...cvData,
            generalInfo: newGeneralInfo 
        });
    }

    function onUpdateEduList(newEduList) {
        onUpdate({
            ...cvData,
            education: newEduList
        });
    }

    function onUpdateWorkList(newWorkList) {
        onUpdate({
            ...cvData,
            workExperience: newWorkList
        });
    }

    return(
        <div className="CVForm-container">
            <GeneralInfoForm generalInfo={cvData.generalInfo} onUpdate={onUpdateGenInfo}/>
            <EducationSection eduList={cvData.education} onUpdate={onUpdateEduList}/>
            <WorkSection workList={cvData.workExperience} onUpdate={onUpdateWorkList}/>
        </div>
    );
}