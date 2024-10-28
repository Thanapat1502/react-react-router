import CreateProductForm from "../components/CreateProductForm";
import { useNavigate } from "react-router-dom";
function CreateProductPage() {
  const navigate = useNavigate();
  const handleClick = (endpoint) => {
    navigate(endpoint);
  };
  return (
    <div>
      <h1>Create Product Page</h1>
      <CreateProductForm />
      <button
        onClick={() => {
          handleClick("/");
        }}>
        Back to Home
      </button>
    </div>
  );
}

export default CreateProductPage;
