import React from 'react';
import './App.css'; 
import Questions from './assets/components/Questions';
const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Q&A</h1>
      </header>
      <Questions />
    </div>
  );
}

export default App;
