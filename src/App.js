
import './App.css';
import ProductList from './features/products/ProductList';
import Header from './components/Header';
import HomePage from './pages/HomePage';
// import ProductDirectoryPage from './pages/ProductDirectoryPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import { Route,Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='features' element={<ProductList />} />
            </Routes>
      <Footer/>
    </div>
  );
}

export default App;