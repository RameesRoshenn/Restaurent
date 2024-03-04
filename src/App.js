
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RestView from './pages/RestView';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/restview/:id' element={<RestView/>} />
    </Routes>
<Footer/>
    </div>
  );
}

export default App;
