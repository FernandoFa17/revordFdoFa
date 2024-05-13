import React, { useContext } from "react";
import { AppContext } from "../../App";

function Key({ keyVal, bigKey, id, animationDel }) {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div
      className="key"
      id={bigKey ? "big" : id}
      onClick={selectLetter}
      style={{ color: "#f6f6f6" ,animationDelay: `${animationDel}s` }}
    >
      {keyVal}
    </div>
  );
}

export default Key;
