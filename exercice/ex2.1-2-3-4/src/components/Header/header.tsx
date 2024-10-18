import React  from "react";

interface HeaderProps {
  url : string;
  title: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header>
      <h1>{props.title}</h1>
        <img src={props.url} alt="logo" className="logo" />
    </header>
  );
};

export default Header;

