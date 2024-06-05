// src/App.js
import React from 'react';
import SurveyForm from './SurveyForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Survey</h1>
      </header>
      <main>
        <SurveyForm />
      </main>
    </div>
  );
}

export default App;
