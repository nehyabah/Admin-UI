import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/Home";
import { Sidebar } from "./components/sidebar/Sidebar";
import "./app.css";
import User from "./components/pages/user/User";
import NewUser from "./components/pages/newUser/NewUser";
import Userlist from "./components/pages/userList/Userlist";
import ProductList from "./components/pages/ProductList/ProductList";
import Product from "./components/Product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <Userlist />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
         
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
