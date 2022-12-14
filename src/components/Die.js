import React from 'react';

const Die = ({value, isHeld, holdDice}) => {

  const styles = {
    backgroundColor: isHeld === true ? '#59e391' : 'white'
  }

  return (
    <div 
      className='dice' 
      style={styles}
      onClick={holdDice}
    >
        <h2>{value}</h2>
    </div>
  )
}

export default Die;