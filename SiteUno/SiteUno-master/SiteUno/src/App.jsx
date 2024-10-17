import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Regras from './pages/Regras'
import Ajuda from './pages/ComoJogar'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'


function App() {

  return (
    <Router >
      <NavBar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/regras" element={<Regras />} />
          <Route path="/ajuda" element={<Ajuda />} />
        </Routes>
      <Footer />
    </Router >
  )
}

export default App