import toggleSquare from './boardActions.js';

const boardReducer = (state = [
  {id: 1, text: '_' }, {id: 2, text: '_' }, {id: 3, text: '_' },
  {id: 4, text: '_' }, {id: 5, text: '_' }, {id: 6, text: '_' },
  {id: 7, text: '_' }, {id: 8, text: '_' }, {id: 9, text: '_' }
], action) => {

  console.log("boardReducer called with state and action..."); console.log(state); console.log(action);

  switch (action.type) {
    case 'SQUARE_CLICKED':
      console.log('square' + action.id + 'clicked!')
      let newState = state.map((i) => {
        console.log('mapping item:')
        console.log(i)
        return i.id === action.id ? Object.assign({}, i, { text: toggleSquare(action.text), id: action.id }) : i
      });

      console.log("new boardState: "); console.log(newState);
      return newState;

    default:
      return state;
  }
};

export default boardReducer;
