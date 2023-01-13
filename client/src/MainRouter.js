import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { TodosPage,Home } from './pages'
import { LoginPage,SignupPage } from './pages/AuthPages'

export default function MainRouter() {


  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/" element={<Home />} />

    </Routes>
  )
}
