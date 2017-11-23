import React from 'react';
import Board from '../board/Board.jsx'
import {ticFunction} from '../actions/index'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      tic: ticFunction(props.dispatch),
      boardState: props.boardState
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      boardState: nextProps.boardState
    })
  }

  render() {
    return (
      <span>
        <Board tic={this.state.tic} boardState={this.state.boardState} />
      </span>
    )
  }
}

export default App;
