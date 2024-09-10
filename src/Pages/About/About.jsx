import { useReducer } from "react";

const About = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "INC":
        return { ...state, count: state.count + 1 };
      case "DEC":
        return { ...state, count: state.count - 1 };
      case "INC_BY_FIVE":
        return { ...state, count: state.count + action.payload };
      default:
        break;
    }
  }

  const initialState = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "INC_BY_FIVE", payload: 5 })}>
        Increment By 5
      </button>
    </div>
  );
};

export default About;
