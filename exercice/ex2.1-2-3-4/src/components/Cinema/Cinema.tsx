import React from 'react';
import {Movie} from '../../../type';

interface CinemaProps {
  name: string;
  movies : Movie[];
}

const Cinema: React.FC<CinemaProps> = (props : CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.movies.map((movie) => (
          <li>
            <strong>{movie.title}</strong> - Directed by {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cinema;