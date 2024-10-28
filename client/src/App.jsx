import "./App.css";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/view/:productId" element={<ViewProductPage />} />
          <Route path="/create" element={<CreateProductPage />} />
          <Route path="/edit/:productId" element={<EditProductPage />} />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
