import React from 'react';

const Die = ({value, isHeld}) => {

  const style = {
    backgroundColor: '#59e391'
  }
  return (
    <div className={isHeld === true ? 'is-held' : 'die'}>
        <h2>{value}</h2>
    </div>
  )
}

export default Die;