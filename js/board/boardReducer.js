import toggleSquare from '../actions/index.js';
import { squareBuilder, squareReducer } from '../square/squareReducer'

const initialState = [
  squareBuilder(1, '_'), squareBuilder(2, '_'), squareBuilder(3, '_'),
  squareBuilder(4, '_'), squareBuilder(5, '_'), squareBuilder(6, '_'),
  squareBuilder(7, '_'), squareBuilder(8, '_'), squareBuilder(9, '_')  
]

const boardReducer = (state = initialState, action) => {

  console.log("boardReducer called with state and action..."); 
  console.log(state); 

  switch (action.type) {
    default:
      return state.map((square) => {
        return squareReducer(square, action);
      });
  }
};

export default boardReducer;
