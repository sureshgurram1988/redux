import {combineReducers} from 'redux'
import playerOneReducer from './Playerone'
import playerTwoReducer from './Playertwo'

const reducer = combineReducers({
    playerOne: playerOneReducer,
    playerTwo: playerTwoReducer
})
export default reducer