import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import ToDoReducer from "./toDoReducer";

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type){
    case "Increment":
      return {count : state.count +1 };
    case "Decrement": 
      return {count : state.count -1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div style={{ textAlign: 'center' , marginTop: "50px"}}>
          <h1>UseReducer Example</h1>

          <h2> Count {state.count}</h2>
          <button onClick={() => dispatch({type:"Increment"})}>Increment</button>
          <button onClick={() => dispatch({type:"Decrement"})}>Decrement</button>
        </div>
        <hr/>

        <ToDoReducer />

      </section>
    </>
  )
}

export default App
