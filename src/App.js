import React from 'react';

import './App.css';
import ScheduleManager from '../src/components/calendar/ScheduleManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>
          Smart View 
        </a>
      </header>
      <ScheduleManager />
    </div>
  );
}

export default App;
