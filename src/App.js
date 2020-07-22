import React from 'react';
import Stage from './components/Stage';
import Sidebar from './components/Sidebar'

// import ChatLog from './ChatLog';


function App({store}) {
  return (
    <div className="App">
      <Sidebar 
        participants = {store.participants}
        chatEvents = {store.chatEvents} 
      />
      <Stage 
         participants = {store.participants}
      />
    </div>
  );
}

export default App;