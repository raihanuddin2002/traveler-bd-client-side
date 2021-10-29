import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import MyOrders from './components/MyOrders/MyOrders';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
            <Header></Header>

          <Switch>

              <Route path="/home">
                  <Home></Home>
              </Route>

              <Route path="/about">
                  <About></About>
              </Route>

              <PrivateRoute path="/my-orders">
                  <MyOrders></MyOrders>
              </PrivateRoute>

              <PrivateRoute path="/manage-all-order">
                  <Blog></Blog>
              </PrivateRoute>

              <PrivateRoute  path="/serviceDetails/:id">
                  <ServiceDetails></ServiceDetails>
              </PrivateRoute>

              <Route path="/login">
                  <Login></Login>
              </Route>

              <Route exact path="/">
                  <Home></Home>
              </Route>

              <Route path="*">
                  <NotFound></NotFound>
              </Route>

          </Switch>

          <Footer></Footer>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;