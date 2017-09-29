import React from 'react';
import Board from '../board/Board.jsx'

class App extends React.Component {

  constructor(props) {
    super(props)

    let ticFunction = (dispatch) => {
      return (id, text) => {
        return () => {
          console.log("props are:"); console.log(props);
          dispatch({ type: 'SQUARE_CLICKED', id: id, text: text });
        }
      }
    }

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
