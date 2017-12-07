import React from 'react';
import squareStyles from './squareStyles.scss'

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
      click: tic(this.props.id, this.props.square.type),
      id: this.props.id,
      square: this.props.square,
    }
  }

  componentWillReceiveProps(nextProps) {

    console.log("will receive Props"); 
    console.log(nextProps);

    this.setState({
      click: nextProps.tic(nextProps.id, nextProps.square.type),
      id: nextProps.id,
      square: nextProps.square,
    })
  }

  render() {

    // const squareStyle = {
    //   fontSize: '128px'
    // }

/*<span className={square.square} style={squareStyle} onClick={this.state.click}>{this.state.text}</span>*/

    console.log("square style:");
    console.log(squareStyles);

// {this.state.square.style + " " + squareStyles.squareStyle}

    return (
      <td>
        <div className={`glyphicon glyphicon-certificate ${this.state.square.style} ${squareStyles.squareStyle}`} onClick={this.state.click}>
          {this.state.square.text}
        </div>
      </td>
    )
  }
}

export default Square;
