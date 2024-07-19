import React, { createContext, useState, useEffect  } from "react";
import { useNavigate } from 'react-router-dom';

const UserInfo = createContext();

const UserInfoProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    // Initialize state from local storage if available
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    // Save user info to local storage whenever it changes
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login'); 
  };

  return (
    <UserInfo.Provider value={{ user, setUser, logout }}>
      {children}
    </UserInfo.Provider>
  );
};

export { UserInfo, UserInfoProvider };
