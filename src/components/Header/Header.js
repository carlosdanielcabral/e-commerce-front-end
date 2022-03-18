import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill, BsFillMoonFill,
  BsFillSunFill } from 'react-icons/bs';
import AppContext from '../../context/AppContext';
import Search from '../Search';
import CartIcon from '../CartIcon';
import './index.css';

const profileStyle = { color: 'white', fontSize: '40px' };
const gearStyle = { color: 'white', fontSize: '20px' }
const Header = () => {
  const { darkMode, setDarkMode } = useContext(AppContext); 
  return (
    <header>
      <section>
        {/* <div className="sidebar-container">
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
        </div> */}
        <section className="profile">
          <button type="button">
            <BsFillPersonFill style={ profileStyle } />
            <h3>Entrar</h3>
          </button>

          <div className="profile-options">
            <Link to="/authentication/login">
              Fazer Login
            </Link>

            <Link to="/authentication/register">
              Cadastre-se
            </Link>       
          </div>
        </section>

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
        <section className="logo">
          <h1>E-commerce</h1>
        </section>
      </section>


      <nav className="navigation-links">
        <Search />
        <Link to="/">
          <AiFillHome style={ gearStyle } />
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
