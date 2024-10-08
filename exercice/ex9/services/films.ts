import path from "node:path";
import {Film, NewFilm} from "../types";
import { parse, serialize } from "../utils/json";
const jsonPath = path.resolve(__dirname, "/../data/films.json");

const defaultFilms : Film[] = [
    {
        id : 1,
        title : "Star Wars",
        director : "George Lucas",
        duration : 121,
    },

    {
        id : 2,
        title : "Indiana Jones",
        director : "Steven Spielberg",
        duration : 115,
    },

    {
        id : 3,
        title : "Jurassic Park",
        director : "Steven Spielberg",
        duration : 127,
    },
];

const ReadOneFilm = (id: number): Film | undefined => {
    const FilmID = parse(jsonPath, defaultFilms);
    return FilmID.find((film) => film.id === id);
};

const readAllFilms =(minDuration: number | undefined = undefined): Film[] => {
    const Films = parse(jsonPath, defaultFilms);
    return minDuration ? Films.filter((film) => film.duration >= minDuration) : Films;
};

const CreateFilm = (newFilm : NewFilm): Film =>{
    const Films = parse(jsonPath, defaultFilms);
    const lastId = defaultFilms[defaultFilms.length - 1].id;
    const film: Film = {id : lastId + 1, ...newFilm};
    if (Films.find((film) => film.title === newFilm.title)) {
        throw new Error("Film already exists");
    }
    const updateFilms = [...Films, film];
    serialize(jsonPath, updateFilms);
    return film;
};

const DeleteFilm = (id: number): Film | undefined  => {
    const Films = parse(jsonPath, defaultFilms);
    const index = Films.findIndex((film) => film.id === id);
    if (index === -1) {
        return undefined;
    }
    const deleteElements = Films.splice(index, 1);
    serialize(jsonPath, Films);
    return deleteElements[0];
};

const PatchFilm = (id: number, updatefilm: Partial<NewFilm>): Film | undefined =>{
    const Films = parse(jsonPath, defaultFilms);
    const index = Films.findIndex((film) => film.id === id);
    if (index === -1) {
        return undefined;
    }

    const film = {...Films[index], ...updatefilm};

    Films[index] = film;

    serialize(jsonPath, Films); 

    return film;
};

export {ReadOneFilm, readAllFilms, CreateFilm, DeleteFilm, PatchFilm};
