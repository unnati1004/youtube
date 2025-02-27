import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

export const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // heavy operation
  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
          (isDarkTheme && "bg-gray-950 text-white")
      }
    >
      <div>
        <button
          className="m-10 bg-green-200 p-2"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1>nth prime: {prime}</h1>
      </div>
    </div>
  );
};
