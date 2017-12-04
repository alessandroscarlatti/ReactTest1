import { squareBuilder, toggleSquare } from '../utils';
import squareReducer from '../square/squareReducer'

// TODO would turn this into a function
const initialState = [
  squareBuilder(0, ' '), squareBuilder(1, ' '), squareBuilder(2, ' '),
  squareBuilder(3, ' '), squareBuilder(4, ' '), squareBuilder(5, ' '),
  squareBuilder(6, ' '), squareBuilder(7, ' '), squareBuilder(8, ' ')  
]

// would turn this into a reducer generator??
const boardReducer = (state = initialState, action) => {

  console.log("boardReducer called with state and action..."); 
  console.log(state); 

  switch (action.type) {
    case 'RESIZE_BOARD':
      let squares = [];
      for (let s = 0; s < action.width * action.height; s++) {
        squares.push(squareBuilder(s, ' '))
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
