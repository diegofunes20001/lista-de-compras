// App.js
import React from 'react';
import ItemList from './components/ItemList';

const App = () => {
    const items = [
        { id: 1, name: 'Leche', purchased: false },
        { id: 2, name: 'Pan', purchased: false },
        // Otros artículos...
    ];

    const handleToggle = (id) => {
        // Lógica para marcar/desmarcar artículo
    };

    const handleDelete = (id) => {
        // Lógica para eliminar artículo
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Lista de Compras</h1>
            <ItemList items={items} onToggle={handleToggle} onDelete={handleDelete} />
        </div>
    );
};

export default App;
