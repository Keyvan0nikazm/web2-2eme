import React from 'react';
import {Movie} from '../../../type';
import MovieItem from '../movieItem';

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
          <MovieItem key={movie.title} movie={movie}/>
        ))}
      </ul>
    </div>
  );
};

export default Cinema;