import React from "react";

interface CompteurClickProps {
    titre : string;
    message : string;
}

const CompteurClick = ({
    titre,
    message = "master !"
}: CompteurClickProps) => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
          <h1>{titre}</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          </div>
          {count >= 10 ? <p>{message}</p> : null}
        </div>
      );
    };

export default CompteurClick;