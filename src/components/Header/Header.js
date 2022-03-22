import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineLogout } from 'react-icons/ai';
import { BsFillPersonFill, BsFillMoonFill,
  BsFillSunFill, BsFillGearFill } from 'react-icons/bs';
import AppContext from '../../context/AppContext';
import Search from '../Search';
import CartIcon from '../CartIcon';
import { logout } from '../../services/userFunctions';
import './index.css';

const profileStyle = { color: 'white', fontSize: '40px' };
const gearStyle = { color: 'rgb(80, 80, 80)', fontSize: '16px', margin: '0 5px' };
const houseIconStyle = { color: 'white', fontSize: '20px' };

const Header = () => {
  const {
    darkMode,
    setDarkMode,
    isUserLogged,
    setIsUserLogged,
    loggedUser,
  } = useContext(AppContext); 

  const makeLogout = () => {
    logout();
    setIsUserLogged(false);
  }
  return (
    <header className={ `${darkMode && 'header-darkmode'}` }>
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
            {
              isUserLogged
                ? <h3 className="name">{loggedUser.name}</h3>
                : <h3>Entrar</h3>
            }
          </button>

          <div className="profile-options">
            {
              isUserLogged
                ? (
                    <>
                      <Link to="/">
                        <BsFillGearFill style={gearStyle} />
                        Preferências
                      </Link>

                      <button type="button" onClick={ makeLogout }>
                        <AiOutlineLogout style={gearStyle} />
                        Fazer logout
                      </button>
                    </>
                  )
                : (
                  <>
                    <Link to="/authentication/login">
                      Fazer Login
                    </Link>

                    <Link to="/authentication/register">
                      Cadastre-se
                    </Link>       
                  </>
                )
            }
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
