import { Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';

function Router() {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/product">
        <h1>All Products</h1>
      </Route>
      <Route path="/product/:i">
        <h1>Single Products</h1>
      </Route>
      <Route path="/cart">
        <h1>Cart</h1>
      </Route>
      <Route path="/*">
        <h1>404 Not FOUND!</h1>
      </Route>
    </Switch>
  )
}

export default Router;