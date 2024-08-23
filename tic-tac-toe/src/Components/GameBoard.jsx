import React , {useState} from 'react';



export default function GameBoard({squareSelected,board}) {

    const initialGameBoard=[
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ];

    // const [gameBoard,setGameBoard]=useState(initialGameBoard);
    // const handleSelectClick=(rowIndex,colIndex,playerSymbol)=>{
    //     setGameBoard(prevGameBoard=>{
    //         //replace one changed square depends where and which player clicked
    //         const toBeUpdatedBoard=[...prevGameBoard.map(innerArray=>[...innerArray])];
    //         toBeUpdatedBoard[rowIndex][colIndex]=playerSymbol;
    //         return toBeUpdatedBoard;
    //     })
    //     squareSelected();
    // }

    // let gameBoard=initialGameBoard;
    // for(const turn of turns){
    //     const {selectedBox,playerMakingMove}=turn;
    //     const {row,col}=selectedBox;
    //     gameBoard[row][col]=playerMakingMove;
    // }

  return (
    <ol id="game-board">
      {board.map((row,rowIndex)=>{
        //create a row
       return (
         <li key={rowIndex}>
           <ol>
             {/* in each row create buttons */}
             {row.map((col, colIndex) => {
               return (
                <li key={colIndex}>
                 {/* here each col value is an empty space where player will put his respective symbol */}
                 {/* <button onClick={()=>handleSelectClick(rowIndex,colIndex,activePlayer)}>{col}</button> */}
                 <button onClick={()=>squareSelected(rowIndex,colIndex)} disabled={board[rowIndex][colIndex]!==null}>{col}</button>
                </li>
               )
             })}
           </ol>
         </li>
       );
      })}
    </ol>
  )
}
