import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Views/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Add new components inside <code>src/Components</code> and also add the each view page or components inside <code> src/Views</code>.
        </p>
        
      </header>
    </div>
  );
}

export default App;
