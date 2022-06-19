import React from "react";
import { Broad } from "./Broad";
export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        null, null, null,
        null, null, null,
        null, null, null,
      ],
      currentPlayer: 'X',
      history: [],
      isFinished: false
    }
    this.lineWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 6, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  }
  handleClickSquare(i) {
    let squares = this.state.squares;;
    let history = this.state.history;
    let currentPlayer = this.state.currentPlayer;
    if (!squares[i]) {
      squares[i] = this.state.currentPlayer;
      history.push(squares);
      this.setState({
        squares: squares,
        history: history,
        currentPlayer: currentPlayer === 'X' ? 'O' : 'X'
      });
    }
    this.caculateWinner(currentPlayer);
  }

  caculateWinner(currentPlayer) {
    for (let index = 0; index < this.lineWins.length; index++) {
      const line = this.lineWins[index];
      if (
        this.state.squares[line[0]] === currentPlayer &&
        this.state.squares[line[1]] === currentPlayer &&
        this.state.squares[line[2]] === currentPlayer
      ) {
        this.setState({
          isFinished: true
        })
        break;
      }
    }
  }

  render() {
    return (
      <div>
        {
          this.state.isFinished ?
            <div>Winner is: {this.state.currentPlayer}</div> :
            <div>Next player: {this.state.currentPlayer}</div>
        }
        <Broad onClick={this.handleClickSquare.bind(this)} currentPlayer={this.state.currentPlayer} squares={this.state.squares}></Broad>
      </div>
    )
  }
}