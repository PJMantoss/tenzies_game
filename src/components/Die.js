import React from 'react';

const Die = ({value, isHeld}) => {
  return (
    <div className={'die'}>
        <h2>{value}</h2>
    </div>
  )
}

export default Die;