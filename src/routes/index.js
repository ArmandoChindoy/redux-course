import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from '../components/Menu'
import Users from '../components/users'

const AppRoutes = () => (
  <BrowserRouter>
    <Menu />
    <Routes id="margen">
      <Route exact path="/" element={<Users />} />
      <Route exact path="/tareas" element={<h1>HOla</h1>} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
