export const Inc_PlayerOne_Score = (value) => async dispatch => {
    dispatch({
        type: 'Increase_PlayerOne_Score',
        payload: value
    })
}
export const Inc_PlayerTwo_Score = () => async dispatch => {
    dispatch({
        type: 'Increase_PlayerTwo_Score'
    })
}

export const Dec_PlayerOne_Score = () => async dispatch => {
    dispatch({
        type: 'Decrease_PlayerOne_Score'
    })  

}
export const Dec_PlayerTwo_Score = () => async dispatch => {
    dispatch({
        type: 'Decrease_PlayerTwo_Score'
    })      
}