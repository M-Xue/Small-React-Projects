import React from 'react';
import './tile.css';
import { MouseEvent } from 'react';

interface boardState {
  o_turn: boolean;
  setO_turn: (o_turn: boolean) => void;
  board: string[][];
  setBoard: (board: string[][]) => void;
  row: number;
  col: number;
}


export default function Tile({ o_turn, setO_turn, board, setBoard, row, col }: boardState) {

  function board_change(event: MouseEvent) {
    if (board[row][col] === '-') {
      if (o_turn === true) {
        const new_board = board;
        new_board[row][col] = 'o';
        setBoard(new_board);
        setO_turn(false)
      } else {
        const new_board = board;
        new_board[row][col] = 'x';
        setBoard(new_board);
        setO_turn(true)
      }
    } 
  }

  


  return (
    <div className="tiles-container" onClick={board_change}>{board[row][col]}</div>
  )
}
