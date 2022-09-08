import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import "./App.css";
import { Routes, Route} from 'react-router-dom'
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
// import { useSelector } from "react-redux";

function App() {

  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    <div className="app">
      <Routes>
          <Route path="/login"  element={<Login />} />
      </Routes>
      { admin && (
        <> 
          <TopBar />
          <div className="container">
            <SideBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users"  element={<UserList />} />
                <Route path="/user/:userId"  element={<User />} />
                <Route path="/newUser"  element={<NewUser />} />
                <Route path="/products"  element={<ProductList />} />
                <Route path="/product/:productId"  element={<Product />} />
                <Route path="/newProduct"  element={<NewProduct />} />
            </Routes>
          </div> 
        </> 
      )}
    </div>
  );
}

export default App;
