import { Router } from "express";
import {Film} from "../types"

const films: Film[] = [
    {
        id: 1,
        title : "le seigneurs des anneaux",
        director : "elon musk",
        duration : 150,
        budget : 15000000
    },
    {
        id : 2,
        title : "batman the dark night",
        director : "Chistopher Nolan",
        duration : 140,
    },
    {
        id : 3,
        title : "le diner de con",
        director : "gad elmaleh",
        duration : 80,
        budget : 1000
    }
]

const router = Router();

router.get('/', (req, res) => {
    if(!req.query["minimum-duration"]){
        return res.json(films);
    }
    const duration = Number(req.query["minimum-duration"]);
    const filter = films.filter((film) => {
        return film.duration >= duration;
    });
    return res.json(filter);
})

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const film = films.find((film) => film.id === id)
    if(!film){
        return res.status(404);
    }
    return res.json(film);
});


export default router