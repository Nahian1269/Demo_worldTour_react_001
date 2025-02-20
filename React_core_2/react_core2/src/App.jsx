import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import Users from "./users";
import Friends from "./Friends";
import Friends_compo from "./Friends_compo";

function App() {
  const [count, setCount] = useState(0);

  // Handling events

  function event1() {
    alert("Event 1");
  }
  // we can use both arrow function and normal function
  const event3 = () => {
    alert("Event 3");
  };

  const add = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <div>
        <h2>React Core 2</h2>

        {/* different way of event handling */}
        {/* way-01 */}

        <button onClick={event1}>EVENT-01</button>

        {/* way-02 */}

        <button onClick={() => alert("event 2")}>EVENT-02</button>

        {/* way-03 */}

        <button onClick={event3}>EVENT-03</button>

        {/* way-04 */}

        <button onClick={() => add(5)}>EVENT-04</button>
        <Counter></Counter>
        <Team></Team>
        <Friends></Friends>
      </div>
    </>
  );
}

export default App;
