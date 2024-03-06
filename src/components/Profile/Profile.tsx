import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import { CircleUserRound } from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { logout } from '@/store/reducers/login';

function Profile() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLogged = useAppSelector((state) => state.login.logged);

  // Function to empty local storage and to disconnect user
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      {isLogged ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <CircleUserRound size={20} />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleLogout}>
              Déconnexion
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
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
      )}
    </>
  );
}

export default Profile;
