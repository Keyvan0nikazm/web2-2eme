import react from 'react';
import {Movie} from '../../type';

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({
    movie
} : MovieItemProps) => {
    const [descriptionVisible, setDescriptionVisible] = react.useState(false);
  return (
    <li onClick={() => setDescriptionVisible(!descriptionVisible)}>
      <p>
        <strong>{movie.title}</strong> - Réalisateur : {movie.director}
      </p>
      <p>{descriptionVisible ? <i>{movie.description}</i> : null}</p>
    </li>
  );
};

export default MovieItem;