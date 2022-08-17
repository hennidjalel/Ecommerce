import { Routes, Route, Navigate } from 'react-router-dom';

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from './pages/Success';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/products/:cat" element={<ProductList />} />
      <Route  path="/product/:id" element={<Product />} />
      <Route  path="/cart" element={<Cart />} />
      <Route  path="/success" element={<Success />} />
      <Route  path="/login" element={user ? <Navigate to={"/"}/> : <Login/>} />
      <Route  path="/register" element={user ? <Navigate to={"/"}/> : <Register/>} />
    </Routes>
  )



};

export default App;