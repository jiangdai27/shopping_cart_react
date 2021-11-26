import './App.css';
import Cart from './Cart';
import Login from './Login';
import Signup from './Signup';
import Shopping from './shopping';
import Product from './product';
import Test from './test';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Shopping} />
          <Route path="/product/:itemId" component={Product} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/test" component={Test} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
