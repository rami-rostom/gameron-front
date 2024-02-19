import { NavLink } from 'react-router-dom';
import ToggleMode from '../ToggleMode/ToggleMode';

import './NavBar.scss';

function NavBar() {
  return (
    <>
      <header className="header">
        <div className="header__nav">
          <div className="header__nav-logo">gameron</div>
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
          <ToggleMode />
        </div>
      </header>
    </>
  );
}

export default NavBar;