import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Products from './components/Products/Products';
import Orders from './components/Order/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/order' element={
          <RequireAuth>
            <Orders/>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/products' element={<RequireAuth>
            <Products/>
          </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
