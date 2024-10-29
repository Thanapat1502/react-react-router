import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const results = await axios("http://localhost:4001/products");
      setProducts(results.data.data);
    } catch (error) {
      console.error("Error product:", error);
    }
  };

  const deleteProducts = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/products/${id}`, products);
      getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Products</h1>
        <button onClick={() => navigate("/product/create")}>
          Create Product
        </button>
      </div>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="product">
              <div className="product-preview">
                <img
                  src="https://via.placeholder.com/250/250"
                  alt="some product"
                  width="250"
                  height="250"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description} </p>
                <div className="product-actions">
                  <button
                    className="view-button"
                    onClick={() => navigate(`/product/edit/${product.id}`)}
                  >
                    View
                  </button>
                  <button
                    onClick={() => navigate(`/product/edit/${product.id}`)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                </div>
              </div>

              <button
                onClick={() => deleteProducts(product.id)}
                className="delete-button"
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
