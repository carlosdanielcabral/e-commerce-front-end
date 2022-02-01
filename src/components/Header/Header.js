import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon';
import './index.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <section className="logo">
          <h1>E-commerce</h1>
        </section>

        <nav className="navigation-links">
          <Link to="/">
            Home
          </Link>

          <CartIcon />
        </nav>
      </header>
    );
  }
}

export default Header;
