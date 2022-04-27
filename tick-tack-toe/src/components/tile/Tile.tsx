import React from 'react';
import './tile.css';
import { MouseEvent } from 'react';

interface boardState {
  o_turn: boolean | null;
  setO_turn: (o_turn: boolean | null) => void;
  board: string[][];
  setBoard: (board: string[][]) => void;
  row: number;
  col: number;
  reset_board: () => void;
}


export default function Tile({ o_turn, setO_turn, board, setBoard, row, col, reset_board }: boardState) {
 

  function check_win() {

    let turn = '-';
    if (o_turn) { 
      turn = 'o';
    } else {
      turn = 'x';
    }

    if (row === 0 && col === 0) {

      if (
        (board[0][1] === turn && board[0][2] === turn) ||
        (board[1][0] === turn && board[2][0] === turn) || 
        (board[1][1] === turn && board[2][2] === turn)
      ){
        return true;
      } 

    } else if (row === 0 && col === 1) {

      if (
        (board[0][0] === turn && board[0][2] === turn) ||
        (board[1][1] === turn && board[2][1] === turn) 
      ){
        return true;
      } 

    } else if (row === 0 && col === 2) {

      if (
        (board[0][1] === turn && board[0][0] === turn) ||
        (board[1][2] === turn && board[2][2] === turn) || 
        (board[1][1] === turn && board[2][0] === turn)
      ){
        return true;
      } 

    } else if (row === 1 && col === 0) {

      if (
        (board[0][0] === turn && board[2][0] === turn) ||
        (board[1][1] === turn && board[1][2] === turn)
      ){
        return true;
      } 


    } else if (row === 1 && col === 1) {

      if (
        (board[0][0] === turn && board[2][2] === turn) ||
        (board[0][2] === turn && board[2][0] === turn) || 
        (board[1][0] === turn && board[1][2] === turn) || 
        (board[0][1] === turn && board[2][1] === turn) 
      ){
        return true;
      } 

    } else if (row === 1 && col === 2) {

      if (
        (board[0][2] === turn && board[2][2] === turn) ||
        (board[1][0] === turn && board[1][1] === turn)
      ){
        return true;
      } 

    } else if (row === 2 && col === 0) {

      if (
        (board[0][0] === turn && board[1][0] === turn) ||
        (board[2][1] === turn && board[2][2] === turn) || 
        (board[1][1] === turn && board[0][2] === turn)
      ){
        return true;
      } 

    } else if (row === 2 && col === 1) {

      if (
        (board[2][0] === turn && board[2][2] === turn) ||
        (board[1][1] === turn && board[0][1] === turn)
      ){
        return true;
      } 

    } else if (row === 2 && col === 2) {

      if (
        (board[0][0] === turn && board[1][1] === turn) ||
        (board[0][2] === turn && board[1][2] === turn) || 
        (board[2][0] === turn && board[2][1] === turn)
      ){
        return true;
      } 

    }

    return false;

  }

  function board_change(event: MouseEvent) {

    if (o_turn === null) {
      // Do nothing


    } else if (board[row][col] === '-') {

      if (o_turn === true) {
        const new_board = board;
        new_board[row][col] = 'o';
        setBoard(new_board);

        if (check_win()) {
          setO_turn(null);
        } else {
          setO_turn(false);
        }

        // setO_turn(false);



      } else {
        const new_board = board;
        new_board[row][col] = 'x';
        setBoard(new_board);

        if (check_win()) {
          setO_turn(null);
        } else {
          setO_turn(true);
        }
      }

    }


  }

  function cell_state_image() {
    if (board[row][col] === '-') {
      return <div></div>
    } else if (board[row][col] === 'x') {
      return <div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div>
    } else if (board[row][col] === 'o') {
      return <div>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991ZM7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div>
    }
  }




  return (
    <div className="tiles-container" onClick={board_change}>{cell_state_image()}</div>
  )
}
