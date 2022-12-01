import { createContext, useState } from "react";


export const Cart = createContext();


const Context = ({ children }) => {
    const [item, setCart] = useState([]);





    return (
        <Cart.Provider value={{ item, setCart }}>
            {children}
        </Cart.Provider>
    );
};


export default Context;