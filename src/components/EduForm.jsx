import "../styles/Resume.css";
import React, { useState } from 'react';

export default function EduForm({}){
    const [Education, setEducation] = useState({title: "", subtitle: "", startDate: "", endDate: "", location: ""});
    return(<form className="WorkEduForm EduForm">
        <label>
        School:
        <input
          type="text"
          placeholder="Enter School/University"
          value={Education.title}
          onChange={e => setEducation({...Education, title: e.target.value})}
        />
      </label>

      <label>
        Degree:
        <input
          type="text"
          placeholder="Enter Degree/Field of Study"
          value={Education.subtitle}
          onChange={e => setEducation({...Education, subtitle: e.target.value})}
        />
      </label>

      <label>
        Start Date:
        <input
          type="date"
          placeholder="Enter Start Date"
          value={Education.startDate}
          onChange={e => setEducation({...Education, startDate: e.target.value})}

        />
      </label>

      <label>
        End Date:
        <input
          type="date"
          placeholder="Enter End Date"
          value={Education.endDate}
          onChange={e => setEducation({...Education, endDate: e.target.value})}

        />
      </label>

      <label>
        Location:
        <input
          type="text"
          placeholder="Enter Location"
          value={Education.location}
          onChange={e => setEducation({...Education, location: e.target.value})}
        />
      </label>

      <div>
        <button type="button">Delete</button>
        <button type="submit">Save</button>
        <button type="reset">Cancel</button>
        
      </div>
    </form>)
}