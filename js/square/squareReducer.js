import { squareBuilder, toggleSquare } from '../utils';
import { EMPTY_SQUARE } from './Squares';

const initialState = squareBuilder(0, EMPTY_SQUARE);

const squareReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SQUARE_CLICKED':
            if (action.id === state.id)
                return squareBuilder(action.id, toggleSquare(action.squareType))

        default:
            return squareBuilder(state.id, state.type);
    }
}

export default squareReducer