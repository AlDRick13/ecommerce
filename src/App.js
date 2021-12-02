import './App.css';
//Router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//layouts
import MainLayout from './Layouts/MainLayout.jsx';
//Pages
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
//context
import {StoreProvider} from './Context/StoreContext.jsx'
function App() {
  return (
<StoreProvider>
  <Router>
      <Switch>
        <MainLayout>

        <Route path="/" exact>
            <Home />
          </Route>

        <Route path="/cart" exact>
            <Cart/>
        </Route>

        </MainLayout>
      </Switch>

    </Router>
</StoreProvider>
 
  );
}

export default App;
