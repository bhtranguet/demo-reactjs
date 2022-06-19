import React from "react";
import { Square } from "./Square";
import '../css/Broad.css';

export class Broad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: props.squares,
      currentPlayer: props.currentPlayer
    }
  }

  render() {
    return (
      <div className="broad">
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  } 

  renderSquare(i) {
    return (
      <Square onClick={() => this.props.onClick(i)  } value={this.state.squares[i]}></Square>
    )
  }
}