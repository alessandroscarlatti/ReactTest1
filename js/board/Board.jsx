import React from 'react';
import Square from '../square/Square.jsx';

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tic: props.tic,
      squares: props.squares
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      squares: nextProps.squares
    })
  }

  render() {

    console.log("this.state.boardState is:");
    console.log(this.state.squares);


    return (
      <table>
        <tbody>
          <tr>
            <td><Square tic={this.state.tic} square={this.state.squares[0]} /></td>
            <td><Square tic={this.state.tic} square={this.state.squares[1]} /></td>
            <td><Square tic={this.state.tic} square={this.state.squares[2]} /></td>
          </tr>
          <tr>
            <td><Square tic={this.state.tic} square={this.state.squares[3]} /></td>
            <td><Square tic={this.state.tic} square={this.state.squares[4]} /></td>
            <td><Square tic={this.state.tic} square={this.state.squares[5]} /></td>
          </tr>
          <tr>
            <td><Square tic={this.state.tic} square={this.state.squares[6]} /></td>
            <td><Square tic={this.state.tic} square={this.state.squares[7]} /></td>
            <td><Square tic={this.state.tic} square={this.state.squares[8]} /></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Board;
