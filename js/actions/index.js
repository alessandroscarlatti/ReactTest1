const ticFunction = (dispatch) => {
    return (id, text) => {
        return () => {
            dispatch({ 
                type: 'SQUARE_CLICKED', 
                id: id, 
                text: text 
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