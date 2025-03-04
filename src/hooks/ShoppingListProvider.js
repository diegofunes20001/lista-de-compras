// Ejemplo de prueba para la función addItem
import { render, screen, fireEvent } from '@testing-library/react';
import { ShoppingListProvider } from '../context/ShoppingListContext';
import App from '../App';

test('debería agregar un artículo a la lista', () => {
    render(
        <ShoppingListProvider>
            <App />
        </ShoppingListProvider>
    );

    const input = screen.getByPlaceholderText(/nombre del artículo/i);
    const button = screen.getByText(/agregar/i);

    fireEvent.change(input, { target: { value: 'Leche' } });
    fireEvent.click(button);

    expect(screen.getByText(/leche/i)).toBeInTheDocument();
});