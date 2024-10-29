import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProductForm() {
  const [products, setProducts] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4001/products/${param.productId}`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [param.productId]);

  const handleEdit = (event) => {
    const { name, value } = event.target;
    setProducts({ ...products, [name]: value });
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `http://localhost:4001/products/${param.productId}`,
        products
      );
      navigate("/");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleEditSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={handleEdit}
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
            onChange={handleEdit}
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
            onChange={handleEdit}
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
            onChange={handleEdit}
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
