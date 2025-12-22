import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icons/logo';
import HamburgerIcon from './icons/HamburgerIcon';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <nav className="nav">
          <Link to="#como-funciona">Como funciona</Link>
          <Link to="#recursos">Recursos</Link>
          <Link to="/security">Segurança</Link>
          <Link to="#faq">FAQ</Link>
        </nav>
        <div className="header-actions">
          <Link className="btn btn-primary" to="https://sinuapp.netlify.app">
            Acessar app
          </Link>
        </div>
        <button className="hamburger-btn" onClick={() => setIsMenuOpen(true)}>
          <HamburgerIcon />
        </button>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}