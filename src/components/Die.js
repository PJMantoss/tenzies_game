import React from 'react';

const Die = ({value, isHeld}) => {

  const styles = {
    backgroundColor: isHeld === '#59e391' : 'white'
  }

  return (
    <div className='die'>
        <h2>{value}</h2>
    </div>
  )
}

export default Die;