import React, { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Notfound from './pages/Notfound';


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route exact path="/404" element={<Notfound/>} />
        <Route path="*" element={<Navigate to="/404" replace/>} />
      </Routes>
    </Fragment>
  );
}

export default App;
