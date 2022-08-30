import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './store'

// importing general components
import NavBar from './components/general/NavBar'

// import component
import Background from './components/general/landing/background'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Background />} />
          </Routes>
          {/* <h1>E-Commerce Front End</h1> */}
        </div>
      </Router>
    </Provider>
  )
}

export default App
