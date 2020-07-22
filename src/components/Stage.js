import React from 'react';
import StageParticipant from './StageParticipant';

const Stage = ({participants}) => {
    return ( 
        <div className="stage">
            {participants.map(participant => {
                if(participant.onStage === true) {
                    return <StageParticipant
                        key={participant.id}
                        name={participant.name}
                    />
                } else {
                    return;
                }
            })}
        </div>
    )
}

export default Stage;



// export default function Stage(props) {

//     let participantList = participants.map((participant) => {
//         if (participant.onStage) {

//             return <div className="onStage" key={participant.id}>
//                 <img className="avatar-pic" src={participant.avatar} alt="avatar" />
//                 {participant.name}
//             </div>
//         }
//     })

//     return (
//         <div className="participantsOnstage">
//             <h3>{participantList}</h3>
//         </div>
//     )

// }
