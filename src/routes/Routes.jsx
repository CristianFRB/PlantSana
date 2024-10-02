import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Importación de las páginas
import Inicio from '../page/Inicio';
import Investigacion from '../page/Investigacion';
import Testimonios from '../page/Testimonios';
import Tiempo_de_curacion from '../page/Tiempo_de_curacion';
import Uvicacion from '../page/Uvicacion';

const Routes = () => {
  return (
    <Routes>
      {/* Ruta para Inicio */}
      <Route path="/inicio" element={<Inicio />} />

      {/* Ruta para Investigación */}
      <Route path="/investigacion" element={<Investigacion />} />

      {/* Ruta para Testimonios */}
      <Route path="/testimonios" element={<Testimonios />} />

      {/* Ruta para Tiempo de curación */}
      <Route path="/tiempo-de-curacion" element={<Tiempo_de_curacion />} />

      {/* Ruta para Ubicación */}
      <Route path="/ubicacion" element={<Uvicacion />} />

      {/* Redirigir cualquier ruta no reconocida a Inicio */}
      <Route path="*" element={<Navigate to="/inicio" />} />
    </Routes>
  );
};

export default Routes;
