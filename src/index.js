import React from 'react'
import ReactDOM from 'react-dom/client'

const Home = () => {
  return (
    <div>
      <h2>salom</h2>
    </div>
  )
}


const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(<Home />)
