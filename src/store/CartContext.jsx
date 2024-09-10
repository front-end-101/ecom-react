import { createContext, useReducer } from "react";

export const CartContext = createContext(null);

const CartContextWrapper = ({ children }) => {
  const initialState = {
    cart: [],
  };

  const reducer = (state, action) => {
    const isAvailable =
      state?.cart?.filter((item) => item.id === action.payload.id).length > 0;
    switch (action.type) {
      case "ADD_TO_CART":
        if (!isAvailable) {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
        }
        return state;
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      case "ADD_QUANTITY": {
        const productId = action.payload;
        const updatedCart = state.cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          cart: updatedCart,
        };
      }
      case "REMOVE_QUANTITY": {
        const productId = action.payload;
        const updatedCart = state.cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
            : item
        );

        return {
          ...state,
          cart: updatedCart,
        };
      }
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextWrapper;
