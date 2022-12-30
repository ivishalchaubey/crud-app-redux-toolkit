import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/product/:id' element={<Product />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
