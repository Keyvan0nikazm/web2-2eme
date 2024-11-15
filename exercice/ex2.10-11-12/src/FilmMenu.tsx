import { Film } from "./type.ts";

interface FilmMenuProps {
  films: Film[];
}

const FilmMenu = ({ films }: FilmMenuProps) => {
  return (
    <table className="films-menu">
      <thead>
        <tr>
          <th>title</th>
          <th>director</th>
          <th>duration</th>
          <th>url</th>
          <th>description</th>
          <th>budget</th>
        </tr>
      </thead>
      <tbody>
        {films.map((film) => (
          <tr key={film.id}>
            <td>{film.title}</td>
            <td>{film.director}</td>
            <td>{film.duration}</td>
            <td>{film.url}</td>
            <td>{film.description}</td>
            <td>{film.budget}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FilmMenu;