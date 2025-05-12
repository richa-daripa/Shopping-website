import { createContext, useState } from "react";
import { itemList } from "./itemList";


export const StoreContext = createContext();

const StoreProvider = (props) => {

  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    }
    else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] === 1) {
        const newItem = { ...prev };
        delete newItem[itemId];
        return newItem
      }
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  }

  const handleDelete = (itemId) => {
    setCartItems((prev) => {
      const { [itemId]: _, ...newItems } = prev;
      return newItems;
    });
  }

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const i in cartItems) {
      if (cartItems[i] > 0) {
        let info = itemList.find((product) => product.id === i)
        totalAmount += info.price * cartItems[i];
      }
    }
    return totalAmount;
  }

  const totalQuantity=()=>{
    let qtotal=0;
    for(const i in cartItems){
      if(cartItems[i]>0){
        qtotal+=cartItems[i];
      }
    }
    return qtotal;
  }

  const contextValue = {
    itemList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    handleDelete,
    totalQuantity
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;