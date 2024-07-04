import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import TimerComponent from "./TimerComponent";
import { useState } from "react";

function App() {
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="App">
      <MyComponent title="Today weather is so hot..."></MyComponent>
      

      {/* {isDone && <TimerComponent></TimerComponent>}
      <button
        onClick={() => {
          setIsDone(!isDone);
        }}
      >
        {isDone ? "Hide" : "Show"}
      </button> */}
    </div>
  );
}

export default App;
