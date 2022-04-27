import React, { useState } from 'react';
import './grid.css';
import Tile from '../tile/Tile'

export default function Grid() {
   
  const [board, setBoard] = useState([['-','-','-'],['-','-','-'],['-','-','-']]);
  const [o_turn, setO_turn] = useState(true);


  return (
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
            />

          ))
        ))}
        
    </div>
  )
}
