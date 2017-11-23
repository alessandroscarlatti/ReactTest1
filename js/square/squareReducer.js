import toggleSquare from '../board/boardActions.js';

const squareBuilder = (id, text) => {
    return { id, text }
}

const initialState = {
    id: 1,
    text: '_'
}

const squareReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SQUARE_CLICKED':
            if (action.id === state.id)
                return squareBuilder(action.id, toggleSquare(action.text))

        default:
            return squareBuilder(state.id, state.text);
    }
}

export {squareBuilder, squareReducer}