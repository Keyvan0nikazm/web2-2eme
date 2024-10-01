import {Router} from "express";
import {Film} from "../types";

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

    {
        id : 4,
        title : "ETii",
        director : "Steven Spielberg",
        duration : 121,
    }
];

const router = Router();

router.get("/", (req, res) => {
    if(!req.query["title-films"]) {
        return res.json(films);
    }
    const titleFilms = String(req.query["title-films"]);
    const filterFilms = films.filter((films) => {
        return films.title.toLowerCase().includes(titleFilms.toLocaleLowerCase());
    });
    return res.json(filterFilms);
});

router.get("/", (req, res) => { // NE FONCTIONNE PAS 
    if(!req.query["sort"]) {
        return res.json(films);
    }
    const sortedFilm = String(req.query["sort"]);
    const sortedfilms = films.slice().sort((a, b) => {
        if(sortedFilm === "asc") {
            return a.id - b.id;
        }
        return b.id - a.id;
    })
    return res.json(sortedfilms);

    });

export default router;
