import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Routers from './Routers'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='app_container'>
        <Routers />
      </div>
    </BrowserRouter>
  )
}

export default App
