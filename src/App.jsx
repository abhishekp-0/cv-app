import { React, useState } from 'react';
import './App.css';
import CVForm from './components/CVForm.jsx';
import CVPreview from './components/Preview/CVPreview.jsx';

export default function App() {
  const [cvData, setCvData] = useState({
    generalInfo: {
      name: '',
      email: '',
      phone: '',
      location: ''
    },
    education: [
      {
        title: '',
        subtitle: '',
        startDate: '',
        endDate: '',
        location: ''
      }
    ],
    workExperience: [
      {
        title: '',
        subtitle: '',
        startDate: '',
        endDate: '',
        location: '',
        description: ''
      }
    ]
  });
  const handleFormUpdate = (newData) => {
    console.log('Updating CV data:', newData);
    setCvData(newData);
  };

  return (
    <div className="App">
      <div className="CVForm">
        <CVForm onUpdate={handleFormUpdate} cvData={cvData} />
      </div>
      <div className="CVPreview">
        <CVPreview cvData={cvData} />
      </div>
    </div>
  );
}
