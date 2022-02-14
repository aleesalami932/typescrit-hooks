import React from "react";
import "./App.css";
import UseStateComponent from "./UseStateComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseContextComponent from "./UseContextComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";
import CustomHookComponent from "./CustomHookComponent";
import ExtraReactComponent from "./ExtraReactComponent";

function App() {
  return (
    <div className="App">
      <h1>useState</h1>
      <UseStateComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>Custom hook</h1>
      <CustomHookComponent />
      <h1>Extra component</h1>
      <ExtraReactComponent />
    </div>
  );
}

export default App;
