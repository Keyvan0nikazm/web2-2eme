import React from "react";
import { Carte } from "../type";

interface CarteProps {
    carte : Carte[];
}

const Cartes: React.FC<CarteProps> = (props : CarteProps) => {
    return (
        <div>
            <ul>
                {props.carte.map((carte) => (
                    <li>
                        <strong>{carte.name}</strong> - {carte.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cartes;