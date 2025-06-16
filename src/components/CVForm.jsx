import "../styles/Form.css";
import GeneralInfoForm from "./GeneralInfoForm.jsx";
import EducationSection from "./EducationSection.jsx";
import WorkSection from "./WorkSection.jsx";
export default function CVForm(){
    return(
        <div className="CVForm-container">
            <GeneralInfoForm fullName="abhishek" email="a@j.com" phone="987"
            address="khandual"/>
            <EducationSection/>
            <WorkSection/>
        </div>
    );
}