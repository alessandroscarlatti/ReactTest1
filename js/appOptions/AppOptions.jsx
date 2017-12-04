import React from 'react';
import optionsStyles from './appOptionsStyles.scss'

class AppOptions extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        resizeBoard: props.resizeBoard,
        width: props.options.width,
        height: props.options.height
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
        resizeBoard: nextProps.resizeBoard,
        width: nextProps.options.width,
        height: nextProps.options.height
    })
  }

  handleNewWidth(event) {
    this.setState({
        width: event.target.value,
    })
  }

  // settings will contain two boxes, one for height, one for depth
  // and a button to submit the new size
  render() {
    return (
      <div class="well">
            <div className={optionsStyles.optionsStyle}>
                <label for="width">Width:</label>
                <input 
                    ref="width" 
                    class="form-control input-sm" 
                    type="text" 
                    id="width" 
                    value={this.state.width}
                    onChange={ e => this.setState({
                        width: e.target.value,
                    })}
                />
            </div>
            <div className={optionsStyles.optionsStyle}>
                <label for="height">Height:</label>
                <input 
                    ref="height" 
                    class="form-control input-sm" 
                    type="text" 
                    id="height" 
                    value={this.state.height}
                    onChange={ e => this.setState({
                        height: e.target.value,
                    })} />
            </div>
            
            {/* TODO React recommends using a callback pattern, rather than string refs... */}
            <div>
                <button class="btn btn-default" 
                    onClick={this.state.resizeBoard(
                        () => this.refs.width.value, () => this.refs.height.value
                    )}
                >New Board!</button>
            </div>
      </div>
    )
  }
}

export default AppOptions;