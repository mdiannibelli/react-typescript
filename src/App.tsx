import Counter from "./components/Counter";
import CounterRed from "./components/CounterRed";
import Form from "./components/Form";
import Timer from "./components/Timer";
import TimerPadre from "./components/TimerPadre";
import User from "./components/User";

function App() {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr />
      <h2>useState</h2>
      <Counter/>
      <hr />
      <User/>
      <hr />
      <h2>useState - useRef</h2>
      <hr />
      <TimerPadre/>
      <hr/>
      <h2>useReducer</h2>
      <hr/>
      <CounterRed/>
      <hr />
      <h2>Custom Hooks</h2>
      <hr />
      <Form/>
      <hr />
    </>
  );
}

export default App;
