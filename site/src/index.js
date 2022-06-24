import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cadastrar from './cadastrar'
import Consultar from './consultar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Cadastrar/>}/>
      <Route path='/consultar' element={<Consultar/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


