import { useEffect  } from 'react';
import { useLocation } from 'react-router-dom';

export const ResetScrollPosition= ({ children }) => {

  // useLocation retorna la ubicación actual, incluyendo el pathname que es la url
  const { pathname } = useLocation();

  // cada vez que cambie la url, es decir que se navega a otra ruta, se ejecuta el useEffect que lo que hace
  // es volver al inicio la posición del scroll
  useEffect (() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};
