import React from 'react';
import AppOptions from '../appOptions/AppOptions'
import Board from '../board/Board'
import { ticFunction, resizeBoard } from '../actions/index'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      resizeBoard: resizeBoard(props.dispatch),
      tic: ticFunction(props.dispatch),
      options: props.reduxState.options,
      squares: props.reduxState.squares
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      squares: nextProps.reduxState.squares,
      options: nextProps.reduxState.options,
    })
  }

  // App will now contain a button to refresh the size of the board
  render() {
    return (
      <span>
        <AppOptions resizeBoard={this.state.resizeBoard} options={this.state.options} />
        <Board tic={this.state.tic} squares={this.state.squares} options={this.state.options} />
      </span>
    )
  }
}

export default App;
