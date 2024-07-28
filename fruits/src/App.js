import './App.css';
import Overview from './pages/overview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from '/Users/Taku/Documents/git_Workspace/Fruits-veggies/fruits/src/pages/product.jsx';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route index element={<Overview />} />
        <Route path="overview" element={<Overview />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
