import { useState } from 'react'
import './App.css'
import FormularioLogin from './componentes/FormularioLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <FormularioLogin></FormularioLogin>
    </div>
  )
}

export default App
