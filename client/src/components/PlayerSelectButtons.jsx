import React from "react"

const PlayerSelectButtons = (props) => {

  const handlePlayer1Click = () => {
    props.assignPlayer("Player 1")
  }

  const handlePlayer2Click = () => {
    props.assignPlayer("Player 2")
  }

  return (    
    <div className="player-select-buttons">
      <button className="player-button" type="button" onClick={handlePlayer1Click}>Player 1</button>
      <button className="player-button" type="button" onClick={handlePlayer2Click}>Player 2</button>
    </div>
  )
}

export default PlayerSelectButtons
