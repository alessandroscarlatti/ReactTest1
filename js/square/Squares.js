import { squareBuilder } from "../utils/index";
import squareStyles from './squareStyles.scss'

console.log("square styles: " + squareStyles);

const EMPTY_SQUARE = {
    type: 'EMPTY_SQUARE',
    text: '',
    style: squareStyles.emptySquare,
}

const PLAYER_1_SQUARE = {
    type: 'PLAYER_1_SQUARE',
    text: '',
    style: squareStyles.player1Square,
}

const PLAYER_2_SQUARE = {
    type: 'PLAYER_2_SQUARE',
    text: '',
    style: squareStyles.player2Square,
}

export {
    EMPTY_SQUARE,
    PLAYER_1_SQUARE,
    PLAYER_2_SQUARE,
}