import React from "react";

interface CompteurClickProps {
    titre : string;
    message? : string;
    messageonButton? : string;
}

const CompteurClick = ({
    titre,
    message = "master !",
    messageonButton = "click me"
}: CompteurClickProps) => {
    const [count, setCount] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div>
          <h1>{titre}</h1>
          {isHovered ? <p>{messageonButton}</p> : null}
          <div className="card">
            <button 
            onClick={() => setCount((count) => count + 1)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                count is {count}
            </button>
          </div>
          {count >= 10 ? <p>{message}</p> : null}
        </div>
      );
    };

export default CompteurClick;