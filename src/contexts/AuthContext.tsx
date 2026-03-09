import React, { createContext, useContext, useState, ReactNode } from 'react';

type Role = 'student' | 'lecturer' | 'admin' | null;

interface User {
  id: string;
  name: string;
  role: Role;
  hasPaid: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (name: string, role: Role) => void;
  logout: () => void;
  processPayment: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (name: string, role: Role) => {
    setUser({
      id: Math.random().toString(36).substr(2, 9),
      name,
      role,
      hasPaid: role !== 'student' // Only students need to pay
    });
  };

  const logout = () => {
    setUser(null);
  };

  const processPayment = () => {
    if (user) {
      setUser({ ...user, hasPaid: true });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, processPayment }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
