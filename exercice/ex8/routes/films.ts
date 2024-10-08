import {Router} from "express";
import {NewFilm} from "../types";
import {containsOnlyExpectedKeys} from "../utils/validate";

import {
    readAllFilms,
    ReadOneFilm,
    CreateFilm,
    DeleteFilm,
    PatchFilm,
} from "../services/films";

const router = Router();

const expectedKey = ["title", "director", "duration", "budget", "description", "imageUrl"];

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.sendStatus(400);
    }
    const film = ReadOneFilm(id);
    if (!film) {
        return res.sendStatus(404);
    }
    return res.json(film);
});

router.get("/", (req, res) => {
    const minDuration = "minimumduration" in req.query ? Number(req.query.minimumduration) : undefined;

    if(minDuration && (typeof minDuration !== "number" || minDuration <= 0)){
        return res.sendStatus(400);
    }

    const Films = readAllFilms(minDuration);
    return res.send(Films);
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
    const newFilm = body as NewFilm;

    const NewFilm = CreateFilm(newFilm);
    if (!NewFilm) {
        return res.sendStatus(409);
    }
    return res.json(NewFilm);
    });

router.delete("/:id", (req,res) => {
    const id = Number(req.params.id);
    if(isNaN(id)){
        return res.sendStatus(400);
    }
    const deleteElements = DeleteFilm(id);
    if(!deleteElements){
        return res.status(404);
    }
    return res.send(deleteElements);
});

router.patch("/:id", (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.sendStatus(400);
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
        return res.sendStatus(400);
    }

    if(!containsOnlyExpectedKeys(body, expectedKey)){
        return res.sendStatus(400);
    }

    const updateFilm = PatchFilm(id, body);

    if (!updateFilm) {
        return res.sendStatus(404);
    }

    return res.send(updateFilm);
});


export default router;
