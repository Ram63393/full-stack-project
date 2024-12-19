import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="app flex">
      <Sidebar />
      <div className="main flex-1">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;