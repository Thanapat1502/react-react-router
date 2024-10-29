import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function ViewProductPage() {
  const navigate = useNavigate();

  // const { id } = useParams();
  const param = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // console.log(id);
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4001/products/${param.id}`
        );
        setProduct(response.data.data); // response.data คือข้อมูลหลักที่ได้จาก server // response.data.data คือข้อมูลที่ถูกฝังอยู่ภายใน data ของ response ซึ่งในที่นี้คือรายละเอียดของ product
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [param.id]);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Name: {product.name}</h2>
        <p>{product.price} THB</p>
        <p>{product.description}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
