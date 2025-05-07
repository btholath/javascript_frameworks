// Importing the useState hook from React to manage component state
import { useState } from 'react';

// Define the Add component
function Add() {
  // Initialize state to store two numbers: first and second
  // Initially both numbers are set to 0
  const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0 });

  // This function is triggered when the first input value changes
  function handleChangeFirstNumber(event) {
    // Update only the 'first' number in state, keep the 'second' number unchanged
    setEnteredNumbers((prevNumbers) => ({
      first: +event.target.value,         // Convert input string to number using '+'
      second: prevNumbers.second,
    }));
  }

  // This function is triggered when the second input value changes
  function handleChangeSecondNumber(event) {
    // Update only the 'second' number in state, keep the 'first' number unchanged
    setEnteredNumbers((prevNumbers) => ({
      first: prevNumbers.first,
      second: +event.target.value,       // Convert input string to number using '+'
    }));
  }

  // Calculate the sum of the two numbers from the state
  const result = enteredNumbers.first + enteredNumbers.second;

  // Return JSX to render two input boxes and show their sum
  return (
    <p>
      <input type="number" onChange={handleChangeFirstNumber} /> +{' '}
      <input type="number" onChange={handleChangeSecondNumber} /> = {result}
    </p>
  );
}

// Export the Add component so it can be used in other files
export default Add;
