import React from 'react';
import Participant from './Participant';

// shows all the participants

const ParticipantList = ({participants}) => {
  return (
    <div 
    className="list">
      {participants.map(participant => (
        <Participant key={participant.id} {...participant}/>
      ))}
    </div>
  );
};

export default ParticipantList;