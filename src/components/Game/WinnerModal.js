/* eslint-disable react/prop-types */
import React from 'react';
import './WinnerModal.css';
import xIcon from '../assets/icon-x.svg';
import oIcon from '../assets/icon-o.svg';

function WinnerModal(props) {
  return (
    <div className="backdrop">
      <div className="winner-modal">
        <p className="show-winner-message">
          {props.winner === 'X' && props.playerOne === 'X'
            ? 'Player 1 Wins!'
            : props.winner === 'O' && props.playerOne === 'O'
            ? 'Player 1 Wins!'
            : props.winner === 'X' && props.playerCpu === 'X'
            ? 'CPU Wins!'
            : props.winner === 'O' && props.playerCpu === 'O'
            ? 'CPU Wins!'
            : props.winner === null && !props.board.includes(null)
            ? ''
            : ''}
        </p>
        <div className="show-winner-icon-container">
          {props.winner === 'X' ? (
            <img src={xIcon} alt="" className="winner-icon" />
          ) : props.winner === 'O' ? (
            <img src={oIcon} alt="" className="winner-icon" />
          ) : props.winner === null && !props.board.includes(null) ? (
            ''
          ) : (
            {}
          )}
          {props.winner === null && !props.board.includes(null) ? (
            <p className="tied-message">round tied</p>
          ) : (
            <p
              className={
                props.winner === 'X'
                  ? 'winner-x-icon-message'
                  : 'winner-o-icon-message'
              }
            >
              takes the round
            </p>
          )}
        </div>
        <div className="winner-modal-button-container">
          <button
            className="quit-button"
            onClick={() => {
              props.onShowMenu();
              props.onRefreshPage();
            }}
          >
            Quit
          </button>
          <button className="next-round-button" onClick={props.onResetBoard}>
            Next Round
          </button>
        </div>
      </div>
    </div>
  );
}

export default WinnerModal;