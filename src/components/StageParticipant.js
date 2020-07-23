import React from 'react';

const StageParticipant = ({avatar, name}) => {
  return (
    <div className="stagePeople">
      <h2>{name}</h2>
      <img src={avatar} className="avatar" alt="avatar" />
    </div>
  )
}

export default StageParticipant;