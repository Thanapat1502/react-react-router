import EditProductForm from "../components/EditProductForm";
import { useNavigate } from "react-router-dom";

function EditProductPage() {
  const navigate = useNavigate();
  const handleClick = (endpoint) => {
    navigate(endpoint);
  };
  return (
    <div>
      <h1>Edit Product Page</h1>
      <EditProductForm />
      <button
        onClick={() => {
          handleClick("/");
        }}>
        Back to Home
      </button>
    </div>
  );
}

export default EditProductPage;
