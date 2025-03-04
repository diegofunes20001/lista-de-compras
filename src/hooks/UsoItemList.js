// ItemList.js
import React, { useContext } from 'react';
import Item from './Item';
import { ShoppingListContext } from '../context/ShoppingListContext';

const ItemList = () => {
    const { items, toggleItem, deleteItem, editItem } = useContext(ShoppingListContext);

    const handleEdit = (id) => {
        const newName = prompt("Ingrese el nuevo nombre del artículo:");
        if (newName) {
            editItem(id, newName);
        }
    };

    return (
        <div className="list-group">
            {items.map(item => (
                <Item 
                    key={item.id} 
                    item={item} 
                    onToggle={toggleItem} 
                    onDelete={deleteItem} 
                    onEdit={handleEdit} 
                />
            ))}
        </div>
    );
};

export default ItemList;