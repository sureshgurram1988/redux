const initialState = {
    name: 'Player Two',
    score: 20
}

const playerTwoReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case 'Increase_PlayerTwo_Score':
            return {
                ...state,
                score: state.score + 1
            }
        case "Decrease_PlayerTwo_Score":
            return {
                ...state,
                score: state.score - 1
            }
        default:
            return state
    }
}

export default playerTwoReducer