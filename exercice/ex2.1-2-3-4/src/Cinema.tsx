import React from 'react';
interface Movie {
    title: string;
    director: string;
}
interface CinemaProps {
  name: string;
  movie1: Movie;
  movie2: Movie;
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
        <br/>
      </ul>
    </div>
  );
};

export default Cinema;