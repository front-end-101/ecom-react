import { createContext, useReducer } from "react";

export const AppContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AppContextWrapper = ({ children }) => {
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
    <AppContext.Provider value={{ state, dispatch, num: "56" }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextWrapper;
