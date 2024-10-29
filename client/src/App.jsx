import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import ViewProductPage from "./pages/ViewProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/create" element={<CreateProductPage />} />
          <Route
            path="/product/edit/:productId"
            element={<EditProductPage />}
          />
          <Route path="/product/edit/:id" element={<ViewProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
