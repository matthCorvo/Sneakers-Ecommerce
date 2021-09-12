import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';


function App() {
  

  return (
<Router>
<ScrollToTop/>

<Header />

<Switch>
  <Route path="/" exact>
<Home />
  </Route>
  <Route path="/cart" exact>
<Cart/>
  </Route>
  <Route  >
  <ErrorPage/>
  </Route>

</Switch>
<Footer/>
</Router>
  );
}

export default App;
