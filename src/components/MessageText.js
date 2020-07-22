import React from 'react';

// Participant, type, message, time, timestamp

const MessageText = ({participant, type, message, time, timestamp}) => {
  const currentMessage = () => {
    if (type === 'message') {
      return <h3>{`${message} at ${new Date(timestamp)}`}</h3>;
    } else if (type === 'leave') {
        return <h3>{`${participant.name} left at ${new Date(timestamp)}`}</h3>;
    } else {
        return <h3>{`${participant.name} ${type} ${new Date(timestamp)}`}</h3>;
    }
  };
  return (
    <div className="participant">
      <img className="avatar" src={participant.avatar} alt="avatar"/>
      <h2>{participant.name}</h2>
      {currentMessage()}
    </div>
  );
};

export default MessageText;