import { NavLink } from 'react-router-dom';

import ToggleMode from '../ToggleMode/ToggleMode';
import Spotlight from '../Spotlight/Spotlight';

import './NavBar.scss';

function NavBar() {
  return (
    <>
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
        </div>
      </header>
    </>
  );
}

export default NavBar;
