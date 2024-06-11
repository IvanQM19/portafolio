import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import JavaScript from './pages/JavaScript';
import Python from './pages/Python';
import ReactPage from './pages/ReactPage';
import Shell from './pages/Shell';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-blue-950 p-4 text-white">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Portafolio de trabajo</h1>
            <div className="flex space-x-4">
              <Link to="/" className="text-xl">Inicio</Link>
              <Link to="/contacto" className="text-xl">Contacto</Link>
            </div>
          </nav>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/lenguaje/javascript" element={<JavaScript />} />
            <Route path="/lenguaje/python" element={<Python />} />
            <Route path="/lenguaje/react" element={<ReactPage />} />
            <Route path="/lenguaje/shell" element={<Shell />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;







