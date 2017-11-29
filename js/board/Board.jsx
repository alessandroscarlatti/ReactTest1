import React from 'react';
import Row from '../row/Row'

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tic: props.tic,
      squares: props.squares,
      width: props.options.width,
      height: props.options.height,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      squares: nextProps.squares,
      width: nextProps.options.width,
      height: nextProps.options.height,
    })
  }

  render() {

    console.log("this.state.boardState is:");
    console.log(this.state.squares);

    var rows = [];

    for (let r = 0; r < this.state.height; r++) {
      rows.push(<Row 
        rowId={r} 
        tic={this.state.tic} 
        width={this.state.width}
        squares={this.state.squares} 
      />)
    }


    return (

      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default Board;
