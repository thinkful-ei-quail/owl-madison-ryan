import React from 'react';
import MessageText from  './MessageText';


const ChatLog = ({chatList, participants}) => {
  console.log(chatList, participants, 'strigs')
  return (
    <div>
    {chatList.map((chat, index) => {
      
      let participant;
      participants.forEach(a => {
        if(a.id === chat.participantId) {
          participant = a;
        }
      });
      return  <MessageText key={index} participant={participant} {...chat}/>; 
    })}
    </div>
  );
};

export default ChatLog;