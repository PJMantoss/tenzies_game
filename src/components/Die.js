import React from 'react';

const Die = ({value, isHeld}) => {

  const styles = {
    backgroundColor: isHeld === true ? '#59e391' : 'white'
  }

  return (
    <div className='die' style={styles}>
        <h2>{value}</h2>
    </div>
  )
}

export default Die;