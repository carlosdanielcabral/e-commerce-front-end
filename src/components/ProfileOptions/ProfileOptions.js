import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import AppContext from '../../context/AppContext';
import { logout } from '../../services/userFunctions';
// import './index.css';

const profileStyle = { color: 'white', fontSize: '40px' };
const gearStyle = { color: 'rgb(80, 80, 80)', fontSize: '16px', margin: '0 5px' };
const houseIconStyle = { color: 'white', fontSize: '20px' };
const menuStyle = { color: 'white', fontSize: '26px' };

const ProfileOptions = () => {
  const {
    isUserLogged,
    setIsUserLogged,
    loggedUser,
  } = useContext(AppContext); 

  const makeLogout = () => {
    logout();
    setIsUserLogged(false);
  }

  return (
    <section className="profile">
      <button type="button">
        <BsFillPersonFill style={profileStyle} />
        {isUserLogged ? (
          <h3 className="name">{loggedUser.name}</h3>
        ) : (
          <h3>Entrar</h3>
        )}
      </button>

      <div className="profile-options">
        {isUserLogged ? (
          <>
            <button type="button" onClick={makeLogout}>
              <AiOutlineLogout style={gearStyle} />
              Fazer logout
            </button>
          </>
        ) : (
          <>
            <Link to="/authentication/login">Fazer Login</Link>

            <Link to="/authentication/register">Cadastre-se</Link>
          </>
        )}
      </div>
    </section>
  )
};

export default ProfileOptions;
