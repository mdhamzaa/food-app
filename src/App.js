
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Booking from './components/Booking';

import Home from './components/Home';
import NavBar from './components/NavBar';
import AddToCart from './components/AddToCart';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />

          <Route path='/cart' element={<AddToCart />} />



        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
