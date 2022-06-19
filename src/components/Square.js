import React from "react";
import '../css/Square.css';

export class Square extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}className="square">
        {this.props.value}
      </button>
    )
  }
}