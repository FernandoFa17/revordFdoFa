import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { AppContext } from "../../App";
// import { boardDefault, generateWordSet } from "../../utils/words";

function GameOver({ handleRestart }) {
  const {
    gameOver,
    currAttempt,
    correctWord,
    guessedWordsList,
    notGuessedWordsList,
    // setCorrectWord,
    // setBoard,
    // setCurrAttempt,
    // setGameOver,
  } = useContext(AppContext);

  // const handleRestart = async () => {
  //   const words = await generateWordSet();
  //   setBoard(boardDefault);
  //   setCurrAttempt({ attempt: 0, letterPos: 0 });
  //   setGameOver({ gameOver: false, guessedWord: false });
  //   setCorrectWord(words.todaysWord);
  // };

  const formatWords = (words) => {
    return words.map((word, index) => (
      <React.Fragment key={index}>
        <span>
          {word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}
        </span>
        {index !== words.length - 1 ? <span>, </span> : <span>.</span>}
      </React.Fragment>
    ));
  };

  return ReactDOM.createPortal(
    <>
      <div className="background" />
      <div className="overlay" />
      <div className="modal">
        {/* <h3>
          {gameOver.guessedWord
            ? "YOU CORRECTLY GUESSED THE WORD"
            : "OH! YOU DIDN'T GUESSED THE WORD, GOOD LUCK NEXT TIME"}
        </h3>
        <h1>Correct: {correctWord}</h1>
        {gameOver.guessedWord ? (
          <h3>You guessed in {currAttempt.attempt} attempts</h3>
        ) : null} */}

        {guessedWordsList.length === 0 ? (
          <p style={{ fontSize: "28px" }}>
            <strong> Guessed words: </strong> You didn't guess any word, good
            luck next time.
          </p>
        ) : (
          <p style={{ fontSize: "28px" }}>
            <strong>Guessed words: </strong> {formatWords(guessedWordsList)}
          </p>
        )}

        {notGuessedWordsList.length === 0 ? (
          <p style={{ fontSize: "28px" }}>
            <strong>Not guessed words: </strong> Looks like you didn't even try.
          </p>
        ) : (
          <p style={{ fontSize: "28px" }}>
            <strong>Not guessed words: </strong>{" "}
            {formatWords(notGuessedWordsList)}
          </p>
        )}

        <button className="restart-button" onClick={handleRestart}>
          Restart Game
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default GameOver;
