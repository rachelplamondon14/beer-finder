import React from 'react'

//Components
import Header from './components/Header'
import BeersList from './components/BeersList'

//Styles
import './App.css';

function App() {
  return (
		<div className="App">
      <Header />
			<BeersList />
    </div>
  )
}

export default App
