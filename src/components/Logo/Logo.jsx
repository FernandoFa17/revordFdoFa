import React, { useState, useEffect } from "react";

function Logo() {
  const logos = ["NATLODLES", "NOTWORDLE"];
  const correctLogo = "NOTWORDLE";
  const [logoIndex, setLogoIndex] = useState(0);
  const [logoLetters, setLogoLetters] = useState(logos[0].split(""));

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= logos.length) {
          clearInterval(interval);
          return prevIndex;
        }

        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  useEffect(() => {
    setLogoLetters(logos[logoIndex].split(""));
  }, [logoIndex, logos[logoIndex]]);

  const id = (letter, index) => {
    if (!correctLogo.includes(letter)) {
      return "error";
    } else if (letter === correctLogo[index]) {
      return "correct";
    } else {
      return "almost";
    }
  };

  return (
    <div className="logo-board">
      {logoLetters.map((letter, index) => (
        <div
          className="logo-letter"
          key={`${letter}-${index}-${logoIndex}`}
          id={id(letter, index)}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}

export default Logo;
