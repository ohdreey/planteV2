import Navbar from './composants/Navbar/Navbar';
import Category from './composants/Category/Category';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
import DisplayCat from './composants/DisplayCategory/DisplayCat';
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:id' element={<DisplayCat />} />
      </Routes>
    </div>
  );
};

export default App;
