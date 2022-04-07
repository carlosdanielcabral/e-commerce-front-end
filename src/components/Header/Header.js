import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, BsFillMoonFill,
  BsFillSunFill } from 'react-icons/bs';
import AppContext from '../../context/AppContext';
import Search from '../Search';
import CartIcon from '../CartIcon';
import ProfileOptions from '../ProfileOptions/ProfileOptions';
import Sidebar from '../Sidebar/Sidebar';
import './index.css';

const Header = () => {
  const { darkMode, setDarkMode } = useContext(AppContext)

  return (
    <header className={ `${darkMode && 'header-darkmode'}` }>
      <section className="header-container">
        <Sidebar />
        <section className="logo">
          <h1>E-commerce</h1>
        </section>
        <section className="general-options">
          <section className="darkmode">
            <button
              type="button"
              onClick={ () => setDarkMode(!darkMode) }
            >
              {
                darkMode
                  ? <BsFillMoonFill />
                  : <BsFillSunFill />
              }
            </button>
          </section>
          <ProfileOptions />
        </section>
      </section>


      <nav className="navigation-links">
        <Search />

        <section className="links">
          <Link to="/">
            <AiFillHome className="home-icon" />
          </Link>

          {/* <Link to="/search-products">
            <BsSearch />
          </Link> */}

          <CartIcon />
        </section>
      </nav>
    </header>
    );
}

export default Header;
