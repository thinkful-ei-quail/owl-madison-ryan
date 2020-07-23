import React from 'react';
import './Participant.css';

const Participant = ({name, avatar, inSession, onStage}) => {
    return (
        <div className="participant">
            <img src={avatar} className="avatar-in-session" alt="avatar"/>
            <div className="info">
                <h3>{name}</h3>
                <p>{inSession ? 'in session' : ''}</p>
                <p>{onStage ? 'true' : ''}</p>
                <a href="#">boot</a>
            </div>
        </div>
        
    )
};

export default Participant;


// export default function Participants (props) {

//     let participantList = participants.map((participant) => {
//         if(participant.inSession) {

//         }

//         let onStageStatus = participant.onStage && ' - on stage';
       
//         // if (participant.onStage) {
//         //     onStageStatus = 'on stage'
//         // }

//         return <div key={participant.id}>
//              <img className ="avatar-pic" src={participant.avatar} alt="avatar"/>
//             {participant.name}
//             {onStageStatus}
//             </div>
//     })

//     return (
//         <div className="participants">
//             <h3>{participantList}</h3>
//         </div>
//     )
// }



