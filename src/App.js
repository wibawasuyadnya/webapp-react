import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Notfound from './pages/Notfound';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Notfound/>} />
        <Route path="/author/agus" element={<Navigate to="*" />}/>
      </Routes>
    </>
  );
}

export default App;
