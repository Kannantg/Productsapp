import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap';
import { addProduct } from '../apis';

const AddProductModal = ({ show, onClose }) => {

  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    image: ""
  });

  const addProductfunc = () => {
    // const newProduct = addProduct(inputVal);
    addProduct(inputVal);
    setInputVal({
      category: "",
      title: "",
      description: "",
      price: "",
      image: ""
    });
    // newProduct.then((res) => setData(res));
  }

  // console.log(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value
    });
  }

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" className="Form-control" name="category" value={inputVal.category} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" className="Form-control" name="title" value={inputVal.title} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" className="Form-control" name="description" value={inputVal.description} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" className="Form-control" name="price" value={inputVal.price} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" className="Form-control" name="image" value={inputVal.image} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="text-center">
            <button type="button" className="btn sitebtn" onClick={addProductfunc}>Add</button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default AddProductModal;