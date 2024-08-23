import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import Player from "./Components/Player";

import {useState} from 'react';
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./Components/GameOver";

const initialGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function App() {
  //const [activePlayer,setActivePlayer]=useState('X');

  const [moves,setMoves]=useState([]);
  const [players,setPlayers]=useState({'X':"Player 1",'O':"Player 2"})

  //game board logic
  let gameBoard=[...initialGameBoard.map(innerRow=>[...innerRow])];
  for(const turn of moves){
      const {selectedBox,playerMakingMove}=turn;
      const {row,col}=selectedBox;
      gameBoard[row][col]=playerMakingMove;
  }
 
  //managing game board state

  let activePlayer='X';
  if(moves.length>0 && moves[0].playerMakingMove==='X'){
    //this mean player with X has done the last move
    //now set the playerPlaying to 'O'
    activePlayer='O';
  }

  const WINNING_COMBINATION=WINNING_COMBINATIONS;
  let winner;
  for(const combination of WINNING_COMBINATION){
    const firstPosSym=gameBoard[combination[0].row][combination[0].column];
    const secPosSym=gameBoard[combination[1].row][combination[1].column];
    const thirdPosSym=gameBoard[combination[2].row][combination[2].column]

    if(firstPosSym && firstPosSym===secPosSym && firstPosSym===thirdPosSym){
      winner=firstPosSym;
    }
   
  }
  const isDraw=moves.length==9 && !winner;


  //Handle restart
  const handleRestart=()=>{
    setMoves([]);
    gameBoard=initialGameBoard;
  }

  //handle player name change
  const handlePlayerNameChange=(symbol,newName)=>{
    setPlayers(prevPlayers=>{
      return {...prevPlayers,[symbol]:newName}
    })
  }

  const handleTurns = (rowIndex,colIndex) => {
    // setActivePlayer((curActivePlayer) => {
    //   return curActivePlayer === "X" ? "O" : "X";
    // });

    
    setMoves(allPrevMoves=>{
      let playerPlaying='X';
      if(allPrevMoves.length>0 && allPrevMoves[0].playerMakingMove==='X'){
        //this mean player with X has done the last move
        //now set the playerPlaying to 'O'
        playerPlaying='O';
      }
      let currentMove={
        selectedBox: {row: rowIndex, col: colIndex},
        playerMakingMove:playerPlaying
      }
      return [currentMove,...allPrevMoves]
    });

  
  };

  return (
    <main>
      <div id="game-container">

        {/* players */}

        <ol id="players" className="highlight-player">
          <Player initialName={players['X']} symbol="X" isActivePlayer={activePlayer==='X'} handlePlayerNameChange={handlePlayerNameChange}/>
          <Player initialName={players['O']} symbol="O" isActivePlayer={activePlayer==='O' } handlePlayerNameChange={handlePlayerNameChange}/>
        </ol>

        {(winner || isDraw) && <GameOver winner={winner} isDraw={isDraw} restart={handleRestart} players={players}></GameOver>}
        {/* game board */}
        <GameBoard squareSelected={handleTurns} board={gameBoard}/>
      </div>
     
      <Log turns={moves}/>
    </main>
  );
}

export default App
