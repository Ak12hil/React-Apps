import React from 'react'

export default function Log({turns}) {
  return (
    <ol id="log">
      {turns && turns.map(turn=>(
        <li key={`${turn.selectedBox.row}${turn.selectedBox.col}`} >{turn.playerMakingMove} made a move at {turn.selectedBox.row},{turn.selectedBox.col}</li>
      ))}
    </ol>
  )
}
