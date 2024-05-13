import React, { useCallback, useEffect, useContext, useState } from "react";
import Key from "../Key/Key";
import { AppContext } from "../../App";

function Keyboard() {
  const {
    onEnter,
    onDelete,
    onSelectLetter,
    disabledLetters,
    almostLetters,
    correctLetters,
    gameOver,
    isAnimationInProgress,
  } = useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver || isAnimationInProgress) {
        return;
      }

      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [
      gameOver.gameOver,
      isAnimationInProgress,
      onEnter,
      onDelete,
      onSelectLetter,
    ]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  const changeId = (key) => {
    return correctLetters.includes(key)
      ? "correctKey"
      : almostLetters.includes(key)
      ? "almostKey"
      : disabledLetters.includes(key)
      ? "disabled"
      : null;
  };

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key, index) => (
          <Key
            key={index}
            keyVal={key}
            id={changeId(key)}
            animationDel={1 + 0 + index * 0.1}
            disabled={isAnimationInProgress}
          />
        ))}
      </div>

      <div className="line2">
        {keys2.map((key, index) => (
          <Key
            key={index}
            keyVal={key}
            id={changeId(key)}
            animationDel={1 + 0.1 + index * 0.1}
            disabled={isAnimationInProgress}
          />
        ))}
      </div>

      <div className="line3">
        <Key
          keyVal={"ENTER"}
          bigKey={true}
          animationDel={1 + 0.2}
          disabled={isAnimationInProgress}
        />
        {keys3.map((key, index) => (
          <Key
            key={index}
            keyVal={key}
            id={changeId(key)}
            animationDel={1 + 0.2 + index * 0.1}
            disabled={isAnimationInProgress}
          />
        ))}
        <Key
          keyVal={"DELETE"}
          bigKey={true}
          animationDel={1 + 1}
          disabled={isAnimationInProgress}
        />
      </div>
    </div>
  );
}

export default Keyboard;
