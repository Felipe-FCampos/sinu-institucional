import { Link } from 'react-router-dom';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
        <Link to="#como-funciona" onClick={onClose}>Como funciona</Link>
        <Link to="#recursos" onClick={onClose}>Recursos</Link>
        <Link to="/security" onClick={onClose}>Segurança</Link>
        <Link to="#faq" onClick={onClose}>FAQ</Link>
        <Link className="btn btn-primary customColor" to="https://sinuapp.netlify.app" onClick={onClose}>
          Acessar app
        </Link>
      </nav>
    </div>
  );
}
