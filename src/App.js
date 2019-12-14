import React from "react";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CategoryPage from "./components/categoryPage/CategoryPage";
const App = () => {
  return (
    <div>
      <Router>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/CategoryPage">
            <CategoryPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
