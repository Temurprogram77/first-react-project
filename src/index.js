import React from 'react'
import ReactDOM from 'react-dom/client'
import Cards from './components/cards/cards.jsx'
import Navbar from './components/navbar/navbar.jsx'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  )
}


const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(<Home />)
