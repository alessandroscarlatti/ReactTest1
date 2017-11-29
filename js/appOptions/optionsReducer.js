const initialState = {
    width: 3,
    height: 3
}

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESIZE_BOARD':
      return {
          width: action.width,
          height: action.height
      }
    default:
      return {
        width: state.width,
        height: state.height    
      }
  }
};

export default optionsReducer;
