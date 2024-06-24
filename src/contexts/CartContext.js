import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

function cartReducer(cart, action) {
  switch (action.type) {
    case "add": {
      if (cart.filter((item) => item.id === action.id).length === 0)
        return [
          ...cart,
          {
            id: action.id,
            name: action.name,
            description: action.description,
            imageUrl: action.imageUrl,
            price: action.price,
            count: action.count,
          },
        ];
      else
        return cart.map((item) =>
          item.id === action.id
            ? { ...item, count: item.count + action.count }
            : item
        );
    }
    case "remove": {
      const itemCount = cart.filter((item) => item.id === action.id)[0].count;
      if (itemCount === 1) return cart.filter((item) => item.id !== action.id);
      else
        return cart.map((item) =>
          item.id === action.id ? { ...item, count: item.count - 1 } : item
        );
    }
    case "removeItemAll": {
      return cart.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
