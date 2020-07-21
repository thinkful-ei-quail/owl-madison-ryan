import React from 'react';

import participants from './STORE';

export default function Participants (props) {

    let participantList = participants.map((participant) => {
        let onStageStatus = participant.onStage && ' - on stage';

        // if (participant.onStage) {
        //     onStageStatus = 'on stage'
        // }

        return <div key={participant.id}>
             <img className ="avatar-pic" src={participant.avatar} alt="avatar"/>
            {participant.name}
            {onStageStatus}
            </div>;
    })

    return (
        <div className="participants">
            <h3>{participantList}</h3>
        </div>
    )
}



