import {Router} from "express";
import path from "node:path";
import {Film, NewFilm} from "../types";
import { parse, serialize } from "../utils/json";
const jsonPath = path.resolve(__dirname, "/../data/films.json");

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
    const Films = parse(jsonPath, films);
    const film = Films.find((film) => film.id === id);
    if (!film) {
        return res.status(404).json("Film not found");
    }
    return res.json(film);
});

router.get("/", (req, res) => {
    const film = parse(jsonPath, films);
    if(!req.query["minimum-duration"]) {
        return res.json(film);
    }
    const minDuration = Number(req.query["minimum-duration"]);
    if (isNaN(minDuration) || minDuration <= 0) {
        return res.status(400).json("Invalid minimum-duration");
    }
    const filterFilms = film.filter((film) => {
        return film.duration >= minDuration;
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

    const Films = parse(jsonPath, films);

    const nextId = Films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

    const NewFilm: Film = {
        id: nextId,
        title,
        director,
        duration,
        budget,
        description,
        imageUrl,
    };

    const exists = films.find(
        (film) =>
        (film.title.toLowerCase() === NewFilm.title.toLowerCase()) &&
        (film.director.toLowerCase() === NewFilm.director.toLowerCase())
    );

    if (exists) {
        return res.status(409).json({error: "Film already exists"});
    }

    Films.push(NewFilm);
    serialize(jsonPath, Films);
    return res.json(NewFilm);
    });

router.delete("/:id", (req,res) => {
    const id = Number(req.params.id);
    const Films = parse(jsonPath, films);
    const index = Films.findIndex((film) => film.id === id);
    if (index === -1) {
        return res.sendStatus(404).json({error: "Film not found"});
    }
    const deleteElements = Films.splice(index, 1);
    serialize(jsonPath, Films);
    return res.json(deleteElements[0]);
});

router.patch("/:id", (req, res) => {
    const id = Number(req.params.id);
    const Films = parse(jsonPath, films);
    const index = Films.findIndex((film) => film.id === id);
    if (!index) {
        return res.status(404);
    }
    const body: unknown = req.body;

    if (!body || 
        typeof body !== "object" ||
        ("title" in body && (typeof body.title !== "string" || !body.title.trim())) ||
        ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
        ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0)) ||
        ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
        ("description" in body && (typeof body.description !== "string")) ||
        ("imageUrl" in body && (typeof body.imageUrl !== "string"))
    ) {
        return res.sendStatus(400).json({error: "Invalid body"});
    }

    const { title, director, duration, budget, description, imageUrl }: Partial<NewFilm> = body;

    if (title) {
        films[index].title = title;
    }
    if (director) {
        films[index].director = director;
    }
    if (duration) {
        films[index].duration = duration;
    }
    if (budget) {
        films[index].budget = budget;
    }
    if (description) {
        films[index].description = description;
    }
    if (imageUrl) {
        films[index].imageUrl = imageUrl;
    }

    serialize(jsonPath, films); 

    return res.json(films[index]);
});

// faire le router.put

router.put("/:id", (req, res) => {
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

    const id = Number(req.params.id);
    if(!id){
        return res.status(400);
    }
    const index = films.findIndex(films => films.id === id);
    if(index < 0){
        const NewFilm = body as NewFilm;
    
        const exists = films.find(
            (film) =>
            (film.title.toLowerCase() === NewFilm.title.toLowerCase()) &&
            (film.director.toLowerCase() === NewFilm.director.toLowerCase())
        );

    if (exists) {
        return res.status(409).json({error: "Film already exists"});
    }

    const nextId = films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

    const addFilm: Film = { id: nextId, ...NewFilm };

    films.push(addFilm);
    return res.json(addFilm);
}

    const updateFilm = { ...films[index], ...body } as Film;

    films[index] = updateFilm;

    return res.send(updateFilm);
})


export default router;
