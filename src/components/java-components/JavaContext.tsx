'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface JavaContextType {
  openParent: string | null;
  activeLink: string;
  setOpenParent: (parent: string | null) => void;
  setActiveLink: (link: string) => void;
  toggleParent: (parent: string) => void;
}

const JavaContext = createContext<JavaContextType | undefined>(undefined);

export function JavaProvider({ children }: { children: ReactNode }) {
  const [openParent, setOpenParent] = useState<string | null>(null);

  const [activeLink, setActiveLink] = useState<string>('/docs/java/introduction/get-started');

  const toggleParent = (parent: string) => {
    setOpenParent((prev) => (prev === parent ? null : parent));
  };

  return (
    <JavaContext.Provider value={{ openParent, activeLink, setOpenParent, setActiveLink, toggleParent }}>
      {children}
    </JavaContext.Provider>
  );
}

export function useJavaContext() {
  const context = useContext(JavaContext);
  if (!context) throw new Error('useJavaContext must be used within JavaProvider');
  return context;
}
