import { Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import ProductListing from '../pages/ProductListing/ProductListing';
import Cart from '../pages/Cart/Cart';
import ProductDetail from '../pages/ProductDetail/ProductDetail';

function Router() {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/product/:i">
        <ProductDetail />
      </Route>
      <Route path="/product-listing">
        <ProductListing />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/*">
        <h1>404 page not found!</h1>
      </Route>
    </Switch>
  )
}

export default Router;