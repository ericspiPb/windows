import React from 'react';

import MacWindow from './components/window/mac.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <MacWindow title={"Mac Window"}>
        Hello World
      </MacWindow>
    </div>
  );
}

export default App;
