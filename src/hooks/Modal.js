import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddItemModal = ({ show, handleClose, handleAdd }) => {
    const [itemName, setItemName] = React.useState('');

    const handleSubmit = () => {
        handleAdd(itemName);
        setItemName('');
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Agregar Artículo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input 
                    type="text" 
                    className="form-control" 
                    value={itemName} 
                    onChange={(e) => setItemName(e.target.value)} 
                    placeholder="Nombre del artículo" 
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Agregar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddItemModal;