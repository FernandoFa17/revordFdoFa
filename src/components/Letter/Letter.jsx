import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";

function Letter({ letterPos, attemptVal }) {
  const {
    board,
    correctWord,
    currAttempt,
    setDisabledLetters,
    setAlmostLetters,
    setCorrectLetters,
    isNewGame,
    setIsNewGame,
    setBoard,
  } = useContext(AppContext);

  const [clearAnimation, setClearAnimation] = useState(false);

  // const letter = board[attemptVal][letterPos];

  // if (isNewGame) {
  //   setDisabledLetters([]);
  //   setAlmostLetters([]);
  //   setCorrectLetters([]);
  //   for (let i = 0; i < 6; i++) {
  //     for (let j = 0; j < 5; j++) {
  //       board[i][j] = "";
  //     }
  //   }
  //   setIsNewGame(false);
  // }

  useEffect(() => {
    if (isNewGame) {
      const newBoard = board.map((row) => row.map(() => ""));
      setBoard(newBoard);
      setIsNewGame(false);
      setClearAnimation(true);
    }
  }, [isNewGame, board, setIsNewGame, setBoard]);

  const letter = board[attemptVal][letterPos];

  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    } else if (letterState === "almost") {
      setAlmostLetters((prev) => [...prev, letter]);
    } else if (letterState === "correct") {
      setCorrectLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  // let animationDel;
  // if (letter !== "") {
  //   animationDel = letterPos * 0.2; //flip animation delay
  // } else {
  //   animationDel = attemptVal * 0.1 + letterPos * 0.1; //bounce animation delay
  // }

  let animationDel =
    letter !== ""
      ? letterPos * 0.2 // flip animation delay
      : clearAnimation
      ? attemptVal * 0.1 + letterPos * 0.1 // clear animation delay
      : attemptVal * 0.1 + letterPos * 0.1; // bounce animation delay

  return (
    <div
      className="letter"
      id={letterState.toString()}
      style={{
        animationDelay: `${animationDel}s`,
      }}
    >
      {letter}
    </div>
  );
}

export default Letter;
