"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Address {
  postalCode: string;
  prefecture: string;
  city: string;
  street: string;
}

export interface User {
  name: string;
  email: string;
  address?: Address;
}

interface StoredUser extends User {
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => void;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  changePassword: (currentPassword: string, newPassword: string) => boolean;
  changeEmail: (currentPassword: string, newEmail: string) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const USERS_KEY = "aether_users";
const SESSION_KEY = "aether_session";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const session = localStorage.getItem(SESSION_KEY);
      if (session) setUser(JSON.parse(session));
    } catch {}
  }, []);

  const login = (email: string, password: string): boolean => {
    try {
      const stored = localStorage.getItem(USERS_KEY);
      const users: StoredUser[] = stored ? JSON.parse(stored) : [];
      const found = users.find((u) => u.email === email && u.password === password);
      if (!found) return false;
      const { password: _pw, ...userData } = found;
      setUser(userData);
      localStorage.setItem(SESSION_KEY, JSON.stringify(userData));
      return true;
    } catch {
      return false;
    }
  };

  const signup = (name: string, email: string, password: string) => {
    const stored = localStorage.getItem(USERS_KEY);
    const users: StoredUser[] = stored ? JSON.parse(stored) : [];
    const newUser: StoredUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    const { password: _pw, ...userData } = newUser;
    setUser(userData);
    localStorage.setItem(SESSION_KEY, JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
  };

  const updateProfile = (data: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...data };
    setUser(updated);
    localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
    try {
      const stored = localStorage.getItem(USERS_KEY);
      if (stored) {
        const users: StoredUser[] = JSON.parse(stored);
        const idx = users.findIndex((u) => u.email === user.email);
        if (idx !== -1) {
          users[idx] = { ...users[idx], ...data };
          localStorage.setItem(USERS_KEY, JSON.stringify(users));
        }
      }
    } catch {}
  };

  const changePassword = (currentPassword: string, newPassword: string): boolean => {
    if (!user) return false;
    try {
      const stored = localStorage.getItem(USERS_KEY);
      if (!stored) return false;
      const users: StoredUser[] = JSON.parse(stored);
      const idx = users.findIndex((u) => u.email === user.email);
      if (idx === -1 || users[idx].password !== currentPassword) return false;
      users[idx].password = newPassword;
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      return true;
    } catch {
      return false;
    }
  };

  const changeEmail = (currentPassword: string, newEmail: string): boolean => {
    if (!user) return false;
    try {
      const stored = localStorage.getItem(USERS_KEY);
      if (!stored) return false;
      const users: StoredUser[] = JSON.parse(stored);
      const idx = users.findIndex((u) => u.email === user.email);
      if (idx === -1 || users[idx].password !== currentPassword) return false;
      users[idx].email = newEmail;
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      const updated = { ...user, email: newEmail };
      setUser(updated);
      localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
      return true;
    } catch {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateProfile, changePassword, changeEmail }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
