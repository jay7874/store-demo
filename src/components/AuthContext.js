"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [redirectPath, setRedirectPath] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setLoginModalOpen(false);
    if (redirectPath) {
      router.push(redirectPath);
      setRedirectPath(null);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const openLoginModal = (path = null) => {
    setRedirectPath(path);
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
    setRedirectPath(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loginModalOpen,
        openLoginModal,
        closeLoginModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
