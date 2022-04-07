import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineLogout, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonFill, BsFillMoonFill,
  BsFillSunFill, BsFillGearFill } from 'react-icons/bs';
import AppContext from '../../context/AppContext';
import Search from '../Search';
import CartIcon from '../CartIcon';
import ProfileOptions from '../ProfileOptions/ProfileOptions';
import './index.css';

const profileStyle = { color: 'white', fontSize: '40px' };
const gearStyle = { color: 'rgb(80, 80, 80)', fontSize: '16px', margin: '0 5px' };
const houseIconStyle = { color: 'rgb(100, 100, 100)', fontSize: '20px' };
const menuStyle = { color: 'white', fontSize: '26px' };

const Header = () => {
  const { darkMode, setDarkMode } = useContext(AppContext); 

  return (
    <header className={ `${darkMode && 'header-darkmode'}` }>
      <section className="header-container">
        <div className="sidebar-container">
          <button type="button">
            <AiOutlineMenu style={ menuStyle }/>
          </button>

          <div className="sidebar">
            <div className="options">
              <ul>
                <li>
                  <ProfileOptions />
                </li>

                <li>
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
                </li>

                <li>
                  <CartIcon /> Meu carrinho
                </li>
              </ul>
            </div>
          </div>
        </div>
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
        <Link to="/">
          <AiFillHome style={ houseIconStyle } />
        </Link>

        {/* <Link to="/search-products">
          <BsSearch />
        </Link> */}

        <CartIcon />
      </nav>
    </header>
    );
}

export default Header;
