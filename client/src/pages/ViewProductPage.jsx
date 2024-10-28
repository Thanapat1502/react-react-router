import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ViewProductPage() {
  const [products, setProducts] = useState([]);
  const { productId } = useParams();
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const data = await axios.get(
        `http://localhost:4001/products/${productId}`
      );
      setProducts(data.data.data);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (endpoint) => {
    navigate(endpoint);
  };
  
  useEffect(() => {
    fetchData();
  }, [productId]);

  return (
    <div>
      <h1>View Product Page {productId} </h1>
      <div className="view-product-container">
        <h2>{`${products.name}`}</h2>
        <img src={`${products.image}`} alt="" />
        <p>price: {products.price}</p>
        <p>Description: {products.description}</p>
      </div>
      <button
        onClick={() => {
          handleClick("/");
        }}>
        Back to Home
      </button>
    </div>
  );
}

export default ViewProductPage;
