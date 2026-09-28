import './App.css'
import { sum } from './helper.js';
import Lottery from './Lottery.jsx';
// Lottery Game 
    // 1. We are given Lottery tickets with a 3 digit number. 
    // 2. The number is generated randomly
    // 3. If the sum of all digits is 15. we win the lottery & get the price.

//  Changes to Lottery Game
    // 1. Make the Lottery tickets of N digit number.
    // 2. The Winning Sum could be any flexible number

// Functions as Props 
      // JavaScript Functions are 1st Class Object 
          //  This means they can be passed to a function as argument, returned from it & assigned to a variable.
function App() {
  let winCondition = (ticket) =>{
    return sum(ticket) === 15;
  }
  return(
    <>
      <Lottery n={3} winCondition={winCondition}/>

    </>
  )
  }

export default App
