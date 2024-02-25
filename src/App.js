import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CatalogPage from './pages/CatalogPage/CatalogPage'; 
import CartPage from './pages/CartPage/CartPage'; 
import HomePage from './pages/HomePage/HomePage'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

