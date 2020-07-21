import React from 'react';

import Participants from './Participants';
import Stage from './Stage';

function App(props) {
  return (
    <div>
         <header>
    <h1>Owl App</h1>
    </header>
    <main className='App'>
      <div className="participants"><Participants /></div>
      
        
      
      <div className="stage">
        <Stage />
        
      </div>
    </main>
    </div>
  );
}

export default App;