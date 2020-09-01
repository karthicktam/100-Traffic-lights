import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [redStyle, setRedStyle] = useState("red");
  const [yellowStyle, setYellowStyle] = useState("");
  const [greenStyle, setGreenStyle] = useState("");
  const [index, setIndex] = useState(0);

  const changeLight = () => {
    let colorArr = ["red", "yellow", "green"];

    let idx = index + 1;
    setIndex(idx);

    if (index > 2) {
      setIndex(0);
    }

    if (colorArr[index] === "red") {
      setRedStyle("red");
      setYellowStyle("");
      setGreenStyle("");
    } else if (colorArr[index] === "yellow") {
      setYellowStyle("yellow");
      setRedStyle("");
      setGreenStyle("");
    } else if (colorArr[index] === "green") {
      setGreenStyle("green");
      setYellowStyle("");
      setRedStyle("");
    }
  };

  useEffect(() => {
    let interval = setInterval(changeLight, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="container">
      <div className={`circle ${redStyle}`}></div>
      <div className={`circle ${yellowStyle}`}></div>
      <div className={`circle ${greenStyle}`}></div>
    </div>
  );
}
