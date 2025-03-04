// context/ShoppingListContext.js
import React, { createContext, useState } from 'react';

export const ShoppingListContext = createContext();

export const ShoppingListProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems((prevItems) => [...prevItems, { id: Date.now(), name: item, purchased: false }]);
    };

    const editItem = (id, newItem) => {
        setItems((prevItems) =>
            prevItems.map((item) => (item.id === id ? { ...item, name: newItem } : item))
        );
    };

    const deleteItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const toggleItem = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) => (item.id === id ? { ...item, purchased: !item.purchased } : item))
        );
    };

    return (
        <ShoppingListContext.Provider value={{ items, addItem, editItem, deleteItem, toggleItem }}>
            {children}
        </ShoppingListContext.Provider>
    );
};