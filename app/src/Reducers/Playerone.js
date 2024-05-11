const initialState = {
    name: 'Player One',
    score: 20
}

const playerOneReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case 'Increase_PlayerOne_Score':
            return {
                ...state,
                score: state.score + payload
            }
        case "Decrease_PlayerOne_Score":
            return {
                ...state,
                score: state.score - 1
            }
        default:
            return state
    }
}
export default playerOneReducer