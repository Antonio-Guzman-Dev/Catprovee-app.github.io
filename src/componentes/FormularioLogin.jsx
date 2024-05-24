import { useState } from "react";


function FormularioLogin({setUser}) {

    const [nombre, setNombre] = useState('');
    const [contraseña, setContraseña] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await axios.post('http://localhost:4000/login', {
                username: nombre,
                paswa: contraseña,
            });

            localStorage.setItem('token', response.data.token);
            setUser(response.data.user);
            navigate('/home');
        } catch(error) {
            console.error('Error en el login', error);
            alert('Credenciales inválidas');
        }

    }

    return (
        <section className="w-80 h-72 grid place-content-center bg-gray-100 rounded-md shadow-lg">

            <h1 className="h-10 grid place-items-center text-lg font-bold	">Bienvenido</h1>
            <form onSubmit={handleSubmit} className="grid place-items-center">
                <input 
                className="pl-1.5 h-10 w-56 rounded-md border-gray-300 border-2 mb-2 text-sm"
                type="text"
                placeholder="Nombre de usuario"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                required
                />
                <input 
                className="pl-1.5 h-10 w-56 rounded-md border-gray-300 border-2 mb-2 text-sm"
                type="password"
                placeholder="Contraseña"
                value={contraseña}
                onChange={e => setContraseña(e.target.value)}
                required
                />
                <button className="h-9 w-56 bg-gray-50 rounded-md border-gray-100 border-2 shadow-md text-sm">Iniciar Sesión</button>
            </form>
        </section>
    );
    
}

export default FormularioLogin;