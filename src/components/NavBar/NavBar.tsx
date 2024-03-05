import { NavLink } from 'react-router-dom';

import ToggleMode from '../ToggleMode/ToggleMode';
import Spotlight from '../Spotlight/Spotlight';
import Profile from '../Profile/Profile';

import './NavBar.scss';
import { useState } from 'react';

function NavBar() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {isLogged ? (
        <header className="header">
          <div className="header__nav">
            <NavLink to={'/'} className="header__nav-logo">
              gameron
            </NavLink>
            <div className="header__nav-link">
              <NavLink to={'/'} className="header__nav-link-item">
                Accueil
              </NavLink>
              <NavLink to={'#'} className="header__nav-link-item">
                Mes jeux
              </NavLink>
              <NavLink to={'#'} className="header__nav-link-item">
                Mon profil
              </NavLink>
            </div>
          </div>

          <div className="header__aside">
            <Spotlight />
            <ToggleMode />
            <Profile />
          </div>
        </header>
      ) : (
        <header className="header">
          <div className="header__nav">
            <NavLink to={'/'} className="header__nav-logo">
              gameron
            </NavLink>
          </div>

          <div className="header__aside">
            <ToggleMode />
            <Profile />
          </div>
        </header>
      )}
    </>
  );
}

export default NavBar;
