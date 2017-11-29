import React from 'react';
import Square from '../square/Square'
import { squareBuilder } from '../utils'

class Row extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tic: props.tic,
      rowId: props.rowId,
      width: props.width,
      squares: props.squares
    }
  }

  componentWillReceiveProps(nextProps) {

    console.log("will receive Props"); 
    console.log(nextProps);

    this.setState({
      tic: nextProps.tic,
      rowId: nextProps.rowId,
      width: nextProps.width,
      squares: nextProps.squares
    })
  }

  render() {

    let squares = [];
    
    for (let s = 0; s < this.state.width; s++) {
        let id = this.state.rowId * this.state.width + s
        squares.push(<Square 
            square={squareBuilder(id, this.state.squares[id].text)}
            tic={this.state.tic}
        />)
    }

    return (
        <tr>
            {squares}
        </tr>
    )
  }
}

export default Row;
