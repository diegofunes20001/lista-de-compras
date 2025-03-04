// Item.js
import React from 'react';
import Button from './Button';

const Item = ({ item, onToggle, onDelete }) => {
    return (
        <div className="d-flex justify-content-between align-items-center border-bottom py-2">
            <span className={item.purchased ? 'text-decoration-line-through' : ''}>
                {item.name}
            </span>
            <div>
                <Button 
                    text={item.purchased ? 'Desmarcar' : 'Marcar como comprado'} 
                    onClick={() => onToggle(item.id)} 
                    className="btn btn-outline-success me-2"
                />
                <Button 
                    text="Eliminar" 
                    onClick={() => onDelete(item.id)} 
                    className="btn btn-outline-danger"
                />
            </div>
        </div>
    );
};

export default Item;
