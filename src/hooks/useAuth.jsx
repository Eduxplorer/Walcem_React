// hooks/useAuth.js
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Decodificar o token e definir o usuário (ou buscar do backend)
      setUser({ token });
    }
  }, []);

  return { user };
};
