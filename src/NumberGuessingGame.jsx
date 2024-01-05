import React, { useState, useEffect } from "react";

const NumberGuessingGame = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (userGuess !== "") {
      checkGuess();
    }
  }, [userGuess]);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const checkGuess = () => {
    const guess = parseInt(userGuess, 10);

    if (isNaN(guess)) {
      setMessage("Please enter a valid number.");
    } else if (guess === randomNumber) {
      setMessage(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
    } else {
      setMessage(guess < randomNumber ? "Try a higher number." : " Try a lower number.");
    }

    setAttempts(attempts + 1);
  };

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleReset = () => {
    setRandomNumber(generateRandomNumber());
    setUserGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      
      <p>{message}</p>
      <input
        type="number"
        value={userGuess}
        onChange={handleInputChange}
        placeholder="Enter your guess"
      />
      <button onClick={checkGuess}>Enter</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default NumberGuessingGame;