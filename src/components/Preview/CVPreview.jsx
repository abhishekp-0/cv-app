import "../../styles/Resume.css"; // Import the CSS file
import Education from "./Education.jsx";
import Work from "./Work.jsx";
import GeneralInfo from "./GeneralInfo.jsx";
export default function CVPreview({cvData}) {
    return (
        <div className="resume-container">
            <GeneralInfo generalInfo={cvData.generalInfo} />
            <Education eduList={cvData.education} />
            <Work workList={cvData.workExperience} />
        </div>
    );
}
