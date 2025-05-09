import React, { createContext, useState } from "react";

export const CartContext = createContext();




export default function AuthProvider(props) {
    const [itemAdded, setItemAdded] = useState(0);
    const [cartItems, setCartItems] = useState({});



    const addItemCart = () => {
        setItemAdded((prev) => prev + 1);
    }
    const removeItemCart = () => {
        setItemAdded((prev) => prev - 1);
    }
    const handleItems = (item) => {
        setCartItems(item);
    }





    let data = {
        itemAdded,
        setItemAdded,
        cartItems, setCartItems,
        addItemCart,
        removeItemCart,
        handleItems
    };

    return (
        <CartContext.Provider value={data}>{props.children}</CartContext.Provider>
    );
}
