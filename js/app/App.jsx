import React from 'react';
import Board from '../board/Board.jsx'
import {ticFunction} from '../actions/index'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      tic: ticFunction(props.dispatch),
      squares: props.reduxState.squares
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      squares: nextProps.reduxState.squares
    })
  }

  render() {
    return (
      <span>
        <Board tic={this.state.tic} squares={this.state.squares} />
      </span>
    )
  }
}

export default App;
