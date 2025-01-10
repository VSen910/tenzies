import { useState } from 'react'
import PropTypes from 'prop-types'

export default function GameTitle({rollDice}) {
  const [rolls, setRolls] = useState(0)

  function handleRoll() {
    rollDice()
    setRolls(prev => prev + 1)
  }
  
  return (
    <div className='max-w-72 mr-3'>
      <h1 className="text-white lg:text-7xl md:text-6xl text-5xl font-bold mb-6">Tenzies</h1>
      <p className='text-white mb-3 text-2xl'>Rolls: {rolls}</p>
      <button className='bg-white rounded-md px-4 py-2 w-full' onClick={handleRoll}>Roll dice</button>
    </div>
  )
}

GameTitle.propTypes = {
  rollDice: PropTypes.func
}