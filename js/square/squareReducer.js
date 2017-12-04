import { squareBuilder, toggleSquare } from '../utils';

const initialState = squareBuilder(0, ' ');

const squareReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SQUARE_CLICKED':
            if (action.id === state.id)
                return squareBuilder(action.id, toggleSquare(action.text))

        default:
            return squareBuilder(state.id, state.text);
    }
}

export default squareReducer