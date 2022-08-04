import {
  BrowserRouter as Router,
  Route} from 'react-router-dom';

import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
// import Product from "./pages/Product";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
        <Route>
          <Home/>
        </Route>
    </Router>
  ) 
    
    

};

export default App;