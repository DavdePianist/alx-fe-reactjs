import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px',
        backgroundColor: 'navy'
      }}
    >
      <h2 style={{ color: 'white' }}>My Company</h2>

      <div style={{ display: 'flex', gap: '15px' }}>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/about">About</Link>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/services">Services</Link>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
