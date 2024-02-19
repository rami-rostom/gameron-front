import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { ThemeProvider } from '../../components/ThemeProvider/ThemeProvider';

function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="app">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default Root;
