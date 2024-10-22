import React from "react";

interface FooterProps {
    text : string;
}

const Footer: React.FC<FooterProps> = (props : FooterProps) => {
    return (
        <div>
            <h3>{props.text}</h3>
        </div>
    );
};

export default Footer;