import React from 'react';

class Square extends React.Component {

  constructor(props) {
    super(props);
    console.log('creating square with:'); console.log(props);
    let tic = props.tic(props.square.id, props.square.text);
    console.log("tic:");
    console.log(tic);

    console.log("tic is "); console.log(tic);
    console.log("tic === undefined"); console.log(tic === undefined);

    this.state = {
      click: tic,
      text: props.square.text,
      id: props.square.id
    }
  }

  componentWillReceiveProps(nextProps) {

    console.log("will receive Props"); console.log(nextProps);

    this.setState({
      click: nextProps.tic(nextProps.square.id, nextProps.square.text),
      text: nextProps.square.text,
      id: nextProps.square.id
    })
  }

  render() {

    const squareStyle = {
      fontSize: '128px'
    }

    return (
      <span style={squareStyle} onClick={this.state.click}>{this.state.text}</span>
    )
  }
}

export default Square;
