const ticFunction = (dispatch) => {
    return (id, text) => {
        return () => {
            dispatch({ type: 'SQUARE_CLICKED', id: id, text: text });
        }
    }
}

export { ticFunction }