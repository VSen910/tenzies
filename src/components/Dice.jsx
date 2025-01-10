import PropTypes from "prop-types"

export default function Dice({index, num, marked, markDice}) {
  return (
    <button onClick={() => markDice(index)} className={(marked ? "bg-green-400" : "bg-white") + " p-6 rounded-md"}>{num}</button>
  )
}

Dice.propTypes = {
  index: PropTypes.number,
  num: PropTypes.number,
  marked: PropTypes.number,
  markDice: PropTypes.bool
}