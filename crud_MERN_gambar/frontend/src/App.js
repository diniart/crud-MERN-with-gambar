import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./components/productList.js";
import AddProduct from "./components/addProduct.js";
import EditProduct from "./components/updateProduct.js";

function App() {
  return (
   
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<ProductList/>}/>
    <Route path="add" element={<AddProduct/>}/>
    <Route path="edit/:id" element={<EditProduct/>}/>
  </Routes>
  </BrowserRouter>
  
  );
}

export default App;
