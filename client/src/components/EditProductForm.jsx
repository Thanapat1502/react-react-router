import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function EditProductForm() {
  const [product, setProduct] = useState([]);
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const { productId } = useParams();
  const navigate = useNavigate();
  const newProduct = {
    name: productName,
    image: productImage,
    price: productPrice,
    description: productDescription,
  };

  const fetchData = async () => {
    try {
      const data = await axios.get(
        `http://localhost:4001/products/${productId}`
      );
      setProduct(data.data.data);
      console.log(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const editUpdate = await axios.put(
        `http://localhost:4001/products/${productId}`,
        newProduct
      );
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productId]);
  return (
    <form className="product-form" onSubmit={handleEdit}>
      <h1>Edit Product Form</h1>
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
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
