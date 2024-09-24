import {Router} from "express";
import {Film, NewFilm} from "../types";

const films : Film[] = [
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

const router = Router();

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const film = films.find((film) => film.id === id);
    if (!film) {
        return res.status(404).json("Film not found");
    }
    return res.json(film);
});

router.get("/", (req, res) => {
    if(!req.query["minimum-duration"]) {
        return res.json(films);
    }
    const minDuration = Number(req.query["minimum-duration"]);
    const filterFilms = films.filter((films) => {
        return films.duration >= minDuration;
    });
    return res.json(filterFilms);
});

router.post("/", (req, res) => {
    const body: unknown = req.body;
    if (!body || 
        typeof body !== "object" ||
        !("title" in body) ||
        !("director" in body) ||
        !("duration" in body) ||
        typeof body.title !== "string" ||
        typeof body.director !== "string" ||
        typeof body.duration !== "number" ||
        !body.title.trim() ||
        !body.director.trim() ||
        body.duration <= 0 ||
        (("budget" in body) && (typeof body.budget !== "number" || body.budget <= 0)) ||
        (("description" in body) && (typeof body.description !== "string")) ||
        (("imageUrl" in body) && (typeof body.imageUrl !== "string"))
    ) {
        return res.sendStatus(400).json({error: "Invalid body"});
    }
    const {title, director, duration, budget, description, imageUrl} = body as NewFilm;

    const nextId = films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

    const NewFilm: Film = {
        id: nextId,
        title,
        director,
        duration,
        budget,
        description,
        imageUrl,
    };

    films.push(NewFilm);
    return res.json(NewFilm);
    });
export default router;
