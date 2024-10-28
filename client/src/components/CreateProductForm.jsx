import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateProductForm() {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const newProduct = {
    name: productName,
    image: productImage,
    price: productPrice,
    description: productDescription,
  };
  
  const navigate = useNavigate();
  const redirectBack = () => {
    alert("Product has been created. Back to Homepage");
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const responded = await axios.post(
        "http://localhost:4001/products",
        newProduct
      );
      redirectBack();
    } catch (error) {
      console.log(error);

      alert("Can't create produt, Please try agian later.");
    }
  };
  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {
              setProductImage(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {
              setProductDescription(e.target.value);
              console.log(newProduct);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
