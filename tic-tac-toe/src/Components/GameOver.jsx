import React from 'react'

export default function GameOver({winner, isDraw,restart,players}) {

  return (
    <div id="game-over">
      <h2> Game Over ! </h2>
      {winner && <p> {players[winner]} wins !! </p>}
      {isDraw && <p> It's a Draw !! </p>}
      <button onClick={restart}>Re-match</button>
    </div>
  )
}
