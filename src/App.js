import 'bootswatch/dist/lux/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Dashboard, CartDetails} from "./pages";

const App = () => {
  return (
<Router>
  <Switch>
    <Route path="/cart" component={CartDetails}/>
    <Route path="/" component={Dashboard}/>
  </Switch>
</Router>
  );
}

export default App;
