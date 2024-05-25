import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import FormularioLogin from './componentes/FormularioLogin'
import Home from './componentes/Home';
import FormularioRegsitro from './componentes/FormularioRegistro';

function App() {
  const [user, setUser] = useState([]);
  const [registro, setRegistro] = useState([]);

  const privateRoute = ({ element, ...rest }) => {
    return user ? element : <Navigate to={"/login"} />;
  } 

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<FormularioLogin setUser={setUser} />} />
        <Route path='/home' element={<privateRoute element={<Home/>} />} />
        <Route path='*' element={<Navigate to='/login' />} />\
        <Route path='/registro' element={<FormularioRegsitro setRegistro={setRegistro} />} />
      </Routes>
    </Router>
  )
}

export default App
