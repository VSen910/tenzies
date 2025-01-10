import {useState, useEffect} from 'react'
import GameBoard from './components/GameBoard'
import GameTitle from './components/GameTitle'
import Confetti from 'react-confetti'

export default function App() {
  const [nums, setNums] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
  const [markedList, setMarkedList] = useState([false, false, false, false, false, false, false, false, false, false])
  const [selectedNum, setSelectedNum] = useState(-1)
  const [isFirstSelection, setIsFirstSelection] = useState(true)
  const [gameWon, setGameWon] = useState(false)

  useEffect(() => {
    setNums(prev => prev.map(() => Math.floor(Math.random() * 10) + 1))
  }, [])

  function markDice(index) {
    if (isFirstSelection) {
      setSelectedNum(nums[index])
      setIsFirstSelection(false)
      setMarkedList(prev => prev.map((e, idx) => idx === index ? true : e))
    } else {
      setMarkedList(prev => {
        const newList = prev.map((e, idx) => idx === index && nums[index] === selectedNum ? true : e)
        for(var i=0; i<newList.length; i++) {
          if(!newList[i]) {
            return newList
          }
        }

        setGameWon(true)
        return newList
      })
    }
  }

  function rollDice() {
    setNums(prev => prev.map((e, idx) => markedList[idx] ? e : Math.floor(Math.random() * 10) + 1))
  }

  return (
    <>
      <div className='flex justify-center items-center h-screen w-screen'>
        <div className='lg:flex lg:justify-between p-20 h-auto w-3/4 bg-gray-400 rounded-lg bg-clip-padding 
        backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100'>
          <GameTitle rollDice={rollDice} />
          <GameBoard nums={nums} markedList={markedList} markDice={markDice} />
        </div>
      </div>
      {gameWon && <Confetti />}
    </>
    
  )
}