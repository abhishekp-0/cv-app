import { React, useState } from 'react';
import './App.css';
import CVForm from './components/CVForm.jsx';
import CVPreview from './components/Preview/CVPreview.jsx';

export default function App() {
  const [cvData, setCvData] = useState({
    generalInfo: {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '+1 555-123-4567',
      location: 'New York, NY, USA'
    },
    education: [
      {
        title: 'Massachusetts Institute of Technology',
        subtitle: 'B.Sc. Computer Science',
        startDate: '2017-09-01',
        endDate: '2021-06-01',
        location: 'Cambridge, MA'
      },
      {
        title: 'Stanford University',
        subtitle: 'M.Sc. Artificial Intelligence',
        startDate: '2021-09-01',
        endDate: '2023-06-01',
        location: 'Stanford, CA'
      }
    ],
    workExperience: [
      {
        title: 'Software Engineer',
        subtitle: 'Google LLC',
        startDate: '2023-07-01',
        endDate: '2025-06-01',
        location: 'Mountain View, CA',
        description: 'Worked on scalable cloud solutions and AI-powered products.'
      },
      {
        title: 'Intern',
        subtitle: 'Facebook, Inc.',
        startDate: '2022-06-01',
        endDate: '2022-08-31',
        location: 'Menlo Park, CA',
        description: 'Developed internal tools for data analysis and automation.'
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
