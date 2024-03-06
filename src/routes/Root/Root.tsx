import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ThemeProvider } from '../../components/ThemeProvider/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import Main from '@/components/Main/Main';

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
      <Main />
      <Toaster />
    </ThemeProvider>
  );
}

export default Root;
