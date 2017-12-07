import {
    EMPTY_SQUARE,
    PLAYER_1_SQUARE,
    PLAYER_2_SQUARE,
} from '../square/Squares'

const squareBuilder = (id, type) => {
    return { 
        id, 
        type,
    }
}

const toggleSquare = (typeName) => {

    console.log("toggling square for: " + typeName);

    switch (typeName) {
        case EMPTY_SQUARE.type: {
            return PLAYER_1_SQUARE;
        } 
        case PLAYER_1_SQUARE.type: {
            return PLAYER_2_SQUARE;
        } 
        case PLAYER_2_SQUARE.type: {
            return EMPTY_SQUARE;
        }
        default: {
            return EMPTY_SQUARE;
        };
    }
};
  
export {
    squareBuilder,
    toggleSquare,
}