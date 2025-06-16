import  { React,useState } from 'react';
import './App.css';
import CVForm from './components/CVForm.jsx';
import CVPreview from './components/CVPreview.jsx';

export default function App() {

  return (
    <div className="App">
      <CVForm/>
    </div>
  );
}
