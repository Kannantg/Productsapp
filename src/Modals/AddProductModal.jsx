import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap';
import { addProduct } from '../apis';

const AddProductModal = ({ show, onClose }) => {

  // const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    image: ""
  });
  const [formErr, setFormErr] = useState({});

  const addProductfunc = () => {
    // const newProduct = addProduct(inputVal);
    const validateErr = validationForm(inputVal);
    const formResult = validateErr;
    setFormErr(validateErr);
    if(Object.keys(formResult).length === 0){
      addProduct(inputVal);
      setInputVal({
        category: "",
        title: "",
        description: "",
        price: "",
        image: ""
      });
    }
    // newProduct.then((res) => setData(res));
  }

  const validationForm = (inputs) => {
    let errors = {};

    const regex = /[0-9]/;

    if (inputs.category === "") {
      errors.category = "Category field is required";
    }
    if (inputs.title === "") {
      errors.title = "Title field is required"
    }
    if (inputs.description === "") {
      errors.description = "Description field is required"
    }
    if (inputs.price === "") {
      errors.price = "Price field is required"
    } else if (!regex.test(inputs.price)) {
      errors.price = "Price field must have numbers only";
    }
    if(inputs.image === "") {
      errors.image = "Image  field is required"
    }

    return errors;
  }

  console.log(formErr);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal({
      ...inputVal,
      [name]: value
    });
  }

  return (
    <Modal show={show} onHide={onClose} centered backdrop={true}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" className="Form-control" name="category" value={inputVal.category} onChange={handleChange} />
            <span className="text-danger">{formErr.category}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" className="Form-control" name="title" value={inputVal.title} onChange={handleChange} />
            <span className="text-danger">{formErr.title}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" className="Form-control" name="description" value={inputVal.description} onChange={handleChange} />
            <span className="text-danger">{formErr.description}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" className="Form-control" name="price" value={inputVal.price} onChange={handleChange} inputMode="tel" />
            <span className="text-danger">{formErr.price}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" className="Form-control" name="image" value={inputVal.image} onChange={handleChange} />
            <span className="text-danger">{formErr.image}</span>
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