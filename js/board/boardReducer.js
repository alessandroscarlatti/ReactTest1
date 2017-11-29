import { squareBuilder, toggleSquare } from '../utils';
import squareReducer from '../square/squareReducer'

// TODO would turn this into a function
const initialState = [
  squareBuilder(0, '_'), squareBuilder(1, '_'), squareBuilder(2, '_'),
  squareBuilder(3, '_'), squareBuilder(4, '_'), squareBuilder(5, '_'),
  squareBuilder(6, '_'), squareBuilder(7, '_'), squareBuilder(8, '_')  
]

// would turn this into a reducer generator??
const boardReducer = (state = initialState, action) => {

  console.log("boardReducer called with state and action..."); 
  console.log(state); 

  switch (action.type) {
    case 'RESIZE_BOARD':
      let squares = [];
      for (let s = 0; s < action.width * action.height; s++) {
        squares.push(squareBuilder(s, '_'))
      }
      return squares.map((square) => {
        return squareReducer(square, action);
      })
    default:
      return state.map((square) => {
        return squareReducer(square, action);
      });
  }
};

export default boardReducer;
