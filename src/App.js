import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Header from './components/Header'

//Routes
import BeersList from './routes/BeersList'
import BeerBrowser from './routes/BeerBrowser'

//todo: add this <Route path='/*' element={<NotFound />} />

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BeersList />} />
          <Route path="/:style" element={<BeerBrowser />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
