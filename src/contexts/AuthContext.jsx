// // contexts/AuthContext.js
// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios'; // Para fazer chamadas HTTP

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         // Função para verificar a autenticação do usuário no backend
//         const checkAuth = async () => {
//             try {
//                 const response = await axios.get('/api/auth/status'); // Endpoint para verificar a autenticação
//                 if (response.data.isAuthenticated) {
//                     setIsAuthenticated(true);
//                     setUser(response.data.user);
//                 }
//             } catch (error) {
//                 console.error('Erro ao verificar a autenticação:', error);
//                 setIsAuthenticated(false);
//                 setUser(null);
//             }
//         };

//         checkAuth();
//     }, []);

//     const login = async (credentials) => {
//         try {
//             const response = await axios.post('/api/auth/login', credentials); // Endpoint para login
//             setIsAuthenticated(true);
//             setUser(response.data.user);
//         } catch (error) {
//             console.error('Erro ao fazer login:', error);
//             setIsAuthenticated(false);
//             setUser(null);
//         }
//     };

//     const logout = async () => {
//         try {
//             await axios.post('/api/auth/logout'); // Endpoint para logout
//             setIsAuthenticated(false);
//             setUser(null);
//         } catch (error) {
//             console.error('Erro ao fazer logout:', error);
//         }
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);

