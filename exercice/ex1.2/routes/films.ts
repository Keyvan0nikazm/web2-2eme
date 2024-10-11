import {Router} from "express";
import {Film} from "../types"

const films : Film[] = [
    {
        id : 1,
        title : "Star Wars",
        director : "George Lucas",
        duration : "121",
    },

    {
        id : 2,
        title : "Indiana Jones",
        director : "Steven Spielberg",
        duration : "115",
    },

    {
        id : 3,
        title : "Jurassic Park",
        director : "Steven Spielberg",
        duration : "127",
    },
];

const router = Router();

router.get("/", (_req, res) => {
    return res.json(films);
})

export default router;
