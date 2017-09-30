import React from 'react';
import Square from '../square/Square.jsx';

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tic: props.tic,
      boardState: props.boardState
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      boardState: nextProps.boardState
    })
  }

  render() {

    console.log("this.state.boardState is:");
    console.log(this.state.boardState);


    return (
      <table>
        <tbody>
          <tr>
            <td><Square tic={this.state.tic} square={this.state.boardState[0]} /></td><td><Square tic={this.state.tic} square={this.state.boardState[1]} /></td><td><Square tic={this.state.tic} square={this.state.boardState[2]} /></td>
          </tr>
          <tr>
            <td><Square tic={this.state.tic} square={this.state.boardState[3]}  /></td><td><Square tic={this.state.tic} square={this.state.boardState[4]}  /></td><td><Square tic={this.state.tic} square={this.state.boardState[5]}  /></td>
          </tr>
          <tr>
            <td><Square tic={this.state.tic} square={this.state.boardState[6]}  /></td><td><Square tic={this.state.tic} square={this.state.boardState[7]} /></td><td><Square tic={this.state.tic} square={this.state.boardState[8]}  /></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Board;
