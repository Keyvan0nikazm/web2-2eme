import React  from "react";

interface FooterProps {
  logo: string;
  autor : string;
}

const Footer : React.FC<FooterProps> = (props: FooterProps) => {
    return (
        <footer>
            <p>{props.autor}
                <img src={props.logo} alt="logo" className="logo" />
            </p>
        </footer>
    )
}

export default Footer;