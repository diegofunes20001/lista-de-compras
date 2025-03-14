// ItemList.js
import React from 'react';
import Item from './Item';

const ItemList = ({ items, onToggle, onDelete }) => {
    return (
        <div className="list-group">
            {items.map(item => (
                <Item 
                    key={item.id} 
                    item={item} 
                    onToggle={onToggle} 
                    onDelete={onDelete} 
                />
            ))}
        </div>
    );
};

export default ItemList;