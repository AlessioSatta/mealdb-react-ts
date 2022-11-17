import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MealDetails from './components/MealDetails';
import MealSearch from './components/MealSearch';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<MealSearch />} />
        <Route path=':id' element={<MealDetails />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
