import React, { useState } from 'react';
import './grid.css';
import Tile from '../tile/Tile'

export default function Grid() {
   
  const [board, setBoard] = useState<string[][]>([['-','-','-'],['-','-','-'],['-','-','-']]);
  const [o_turn, setO_turn] = useState<boolean | null>(true);
  const [winner, setWinner] = useState<string | null>(null)


  function reset_board() {
    setBoard([['-','-','-'],['-','-','-'],['-','-','-']]);
    setO_turn(true);
    setWinner(null);
  }

  function render_winner() {
    if (winner === 'o') {    
      return <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    } else if (winner === 'x') {
      return <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
    }
  }

  return (
    <>
      <div className='grid-container'>
        
        {board.map((board_state, row_index) => (
          board_state.map((tile_state, col_index) => (
            <Tile 
              key={`${row_index} ${col_index}`}
              o_turn={o_turn}
              setO_turn={setO_turn}
              board={board}
              setBoard={setBoard}
              row={row_index}
              col={col_index}
              setWinner={setWinner}
            />

          ))
        ))}
        {winner && <div className='winner-line'>Winner is {render_winner()}</div>}
      </div>
      <button className='reset-button' onClick={reset_board}>Reset</button>
    </>
    
  )
}


// https://reactjs.org/tutorial/tutorial.html#storing-a-history-of-moves