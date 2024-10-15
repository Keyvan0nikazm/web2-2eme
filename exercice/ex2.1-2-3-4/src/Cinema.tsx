import React from 'react';
interface CinemaProps {
    name: string;
    movie1: {
        title: string;
        director: string;
    };
    movie2: {
        title: string;
        director: string;
    };
}

const Cinema: React.FC<CinemaProps> = ({ name, movie1, movie2 }) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li>
          <strong>{movie1.title}</strong> - Directed by {movie1.director}
        </li>
        <li>
          <strong>{movie2.title}</strong> - Directed by {movie2.director}
        </li>
      </ul>
    </div>
  );
};

export default Cinema;