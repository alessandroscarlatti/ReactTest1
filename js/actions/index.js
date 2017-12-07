const ticFunction = (dispatch) => {
    return (id, squareType) => {
        return () => {
            dispatch({ 
                type: 'SQUARE_CLICKED', 
                id: id, 
                squareType: squareType, 
            });
        }
    }
}

const resizeBoard = (dispatch) => {
    return (width, height) => {
        return () => {
            dispatch({ 
                type: 'RESIZE_BOARD', 
                width: width(), 
                height: height() 
            })
        }
    }
}

export { 
    ticFunction,
    resizeBoard
}