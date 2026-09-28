import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('abhinav_portfolio_theme');
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch (e) {
      console.warn('LocalStorage access failed:', e);
    }
    // Default theme: Pure AMOLED Black
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      if (metaColorScheme) metaColorScheme.setAttribute('content', 'dark light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      if (metaColorScheme) metaColorScheme.setAttribute('content', 'light dark');
    }

    try {
      localStorage.setItem('abhinav_portfolio_theme', theme);
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
