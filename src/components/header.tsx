import { Link } from 'react-router-dom'
import Logo from '../assets/icons/logo'

export default function Header() {
  return (
    <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <Link to="/"><Logo /></Link>
          </div>
          <nav className="nav">
            <Link to="#como-funciona">Como funciona</Link>
            <Link to="#recursos">Recursos</Link>
            <Link to="/security">Segurança</Link>
            <Link to="#faq">FAQ</Link>
          </nav>
          <Link className="btn btn-primary" to="https://sinuapp.netlify.app">Acessar app</Link>
        </div>
      </header>
  )
}