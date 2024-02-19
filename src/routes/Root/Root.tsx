import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <div className="app">
      <Outlet />
    </div>
  );
}

export default Root;
