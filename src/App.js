import React from 'react'
import "./App.css";
import HomePage from './components/HomePage'
import EmployeeAppPage from './components/EmployeeAppPage'

function App() {
  return (
    <div className="app">
      <HomePage />
      <EmployeeAppPage />
    </div>
  )
}

export default App