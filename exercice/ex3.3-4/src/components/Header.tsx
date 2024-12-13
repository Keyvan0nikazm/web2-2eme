import { useEffect, useState } from "react";
import "./Header.css";

interface HeaderProps {
  urlLogo: string;
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  const [theme , setTheme] = useState<string>(() => {
    const theme = localStorage.getItem('theme');
    return theme || 'light';
  });
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
  };
  return (
    <footer className={`header ${theme}`}>
      <img src={props.urlLogo} alt="logo" className="logo" />
      <div>{props.children}</div>
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </footer>
  );
};

export default Header;
