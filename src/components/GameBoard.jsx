import Dice from "./Dice";
import PropTypes from "prop-types";

export default function GameBoard({nums, markedList, markDice}) {
  return (
    <div className="grid lg:grid-cols-5 lg:grid-rows-2 grid-cols-2 grid-rows-5 gap-4 lg:mt-0 mt-4">
      <Dice index={0} num={nums[0]} marked={markedList[0]} markDice={markDice}/>
      <Dice index={1} num={nums[1]} marked={markedList[1]} markDice={markDice}/>
      <Dice index={2} num={nums[2]} marked={markedList[2]} markDice={markDice}/>
      <Dice index={3} num={nums[3]} marked={markedList[3]} markDice={markDice}/>
      <Dice index={4} num={nums[4]} marked={markedList[4]} markDice={markDice}/>
      <Dice index={5} num={nums[5]} marked={markedList[5]} markDice={markDice}/>
      <Dice index={6} num={nums[6]} marked={markedList[6]} markDice={markDice}/>
      <Dice index={7} num={nums[7]} marked={markedList[7]} markDice={markDice}/>
      <Dice index={8} num={nums[8]} marked={markedList[8]} markDice={markDice}/>
      <Dice index={9} num={nums[9]} marked={markedList[9]} markDice={markDice}/>
    </div>
  )
}

GameBoard.propTypes = {
  nums: PropTypes.array,
  markedList: PropTypes.array,
  markDice: PropTypes.bool
}