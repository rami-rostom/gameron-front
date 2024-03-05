import { Link, NavLink } from 'react-router-dom';

import { CircleUserRound } from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <CircleUserRound size={20} />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link to={'/login'}>
                <DropdownMenuItem>Connexion</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
}

export default NavBar;
