import React from 'react'
import{connect} from 'react-redux'
import {Inc_PlayerOne_Score, Inc_PlayerTwo_Score, Dec_PlayerOne_Score, Dec_PlayerTwo_Score} from './Actions'


const App = ({playerOne, playerTwo, Inc_PlayerOne_Score, Inc_PlayerTwo_Score, Dec_PlayerOne_Score, Dec_PlayerTwo_Score}) => {
  return (
    <div>
      <h2>Player one Details of score</h2>
      <p>Name is {playerOne.name}</p> <p>Score is {playerOne.score}</p>
      <button onClick={() => Inc_PlayerOne_Score(5)}>Increment</button>
      <button onClick={() => Dec_PlayerOne_Score()}>Decrement</button>
     
      <h2>Player two Details</h2>
      <p>Name is {playerTwo.name}</p> <p>Score is {playerTwo.score}</p>
      <button onClick={() => Inc_PlayerTwo_Score()}>Increment</button>
      <button onClick={() => Dec_PlayerTwo_Score()}>Decrement</button>
    </div>
  )
}

const mapStateToProps = state => ({
    playerOne: state.playerOne,
    playerTwo: state.playerTwo
})
export default connect(mapStateToProps, {Inc_PlayerOne_Score, Inc_PlayerTwo_Score, Dec_PlayerOne_Score, Dec_PlayerTwo_Score})(App)
