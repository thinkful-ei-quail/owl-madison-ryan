import React from 'react';

import Participants from './Participants';

function App(props) {
  return (
    <div>
         <header>
    <h1>Owl App</h1>
    </header>
    <main className='App'>
     <div>
      <Participants 
        name = {Participants.name}
        
      />
     </div>
    </main>
    </div>
  );
}

export default App;