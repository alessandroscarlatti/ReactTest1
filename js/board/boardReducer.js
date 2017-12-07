import { squareBuilder, toggleSquare } from '../utils';
import squareReducer from '../square/squareReducer'
import { EMPTY_SQUARE } from '../square/Squares';

// TODO would turn this into a function
const initialState = [
  squareBuilder(0, EMPTY_SQUARE), squareBuilder(1, EMPTY_SQUARE), squareBuilder(2, EMPTY_SQUARE),
  squareBuilder(3, EMPTY_SQUARE), squareBuilder(4, EMPTY_SQUARE), squareBuilder(5, EMPTY_SQUARE),
  squareBuilder(6, EMPTY_SQUARE), squareBuilder(7, EMPTY_SQUARE), squareBuilder(8, EMPTY_SQUARE)  
]

// would turn this into a reducer generator??
const boardReducer = (state = initialState, action) => {

  console.log("boardReducer called with state and action..."); 
  console.log(state); 

  switch (action.type) {
    case 'RESIZE_BOARD':
      let squares = [];
      for (let s = 0; s < action.width * action.height; s++) {
        squares.push(squareBuilder(s, EMPTY_SQUARE))
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
