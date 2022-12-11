import { Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Notfound from './pages/Notfound';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Notfound/>} />
        <Route path="" element={<Notfound/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
