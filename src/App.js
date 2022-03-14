import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Header from './components/Header'

//Routes
import BeersList from './routes/BeersList'
import BeerBrowser from './routes/BeerBrowser'

//Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BeersList />} />
          <Route path="/:beerStyle" element={<BeerBrowser />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
