import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill, BsFillGearFill, BsSearch } from 'react-icons/bs';
import CartIcon from '../CartIcon';
import './index.css';

const style = { color: 'white', fontSize: '30px' };
const profileStyle = { color: 'rgb(14, 29, 32)', fontSize: '80px' };
const gearStyle = { color: 'white', fontSize: '20px' }
const Header = () => {
  return (
    <header>
      <section>
        <div className="sidebar-container">
          <button type="button">
            <AiOutlineMenu style={ style }/>
          </button>

          <div className="sidebar">
            <div className="profile">
              <div className="profile-image">
                <BsFillPersonFill style={ profileStyle } />
              </div>
            </div>

            <div className="options">
              <ul>
                <li>
                  Visualizar perfil
                </li>

                <li>
                  <BsFillGearFill style={ gearStyle } /> Preferências
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="logo">
        <h1>E-commerce</h1>
      </section>

      <nav className="navigation-links">
        <Link to="/">
          <AiFillHome style={ gearStyle } />
        </Link>

        <Link to="/search-products">
          <BsSearch />
        </Link>

        <CartIcon />
      </nav>
    </header>
    );
}

export default Header;
