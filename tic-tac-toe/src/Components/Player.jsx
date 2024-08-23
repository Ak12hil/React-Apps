import React , {useState} from 'react'

export default function Player({symbol,initialName,isActivePlayer,handlePlayerNameChange}) {

    const [playerName,setPlayerName]=useState(initialName);
    const [isEditing,setIsEditing]=useState(false);
    const handleEditClick=()=>{
        setIsEditing(prevValue=>!prevValue); 
    } 
    const handleChange=(event)=>{
        setPlayerName(event.target.value);
        handlePlayerNameChange(symbol,event.target.value);
    }


  return (
    <li className={isActivePlayer?'active':undefined}>
      <span className="player">
        {isEditing?(<input type="text" value ={playerName} onChange={handleChange} required/>):(<span className="player-name">{playerName}</span>)}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
      </span>
    </li>
  );
}
