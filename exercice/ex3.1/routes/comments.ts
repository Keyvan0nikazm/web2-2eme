import { Router } from "express";
import { containsOnlyExpectedKeys } from "../utils/validate";
import { readALL, createOne, deleteOne } from '../services/comments';
import { Comment } from '../types';
import { authorize } from "../utils/auths";

const router = Router();

const expectedKeys = ["comment", "filmId", "username"];

router.get("/", (req, res) => {
    const filmId = "filmId" in req.query ? Number(req.query["filmId"]) : undefined;
    if (filmId !== undefined && (isNaN(filmId) || filmId <= 0)) {
        return res.sendStatus(400);
    }
    const comments = readALL(filmId);
    return res.send(comments);
});

router.post("/", authorize, (req, res) => {
    const body: unknown = req.body;

    if (
        !body ||
        typeof body !== "object" ||
        !("comment" in body) ||
        !("filmId" in body) ||
        typeof body.comment !== "string" ||
        typeof body.filmId !== "number" ||
        !Number.isInteger(body.filmId) ||
        body.filmId <= 0 ||
        !body.comment.trim() ||
        !("user" in req) ||
        typeof req.user !== "object" ||
        !req.user ||
        !("username" in req.user) ||
        typeof req.user.username !== "string"
    ) {
        return res.status(400).json({ message: 'Invalid request data' });
    }

    if (!containsOnlyExpectedKeys(body, expectedKeys)) {
        return res.status(400).json({ message: 'Unexpected keys in request body' });
    }

    const newComment: Comment = {
        filmId: body.filmId,
        username: req.user.username,
        comment: body.comment,
    };

    try {
        createOne(newComment);
        return res.status(201).json(newComment);
    } catch (error) {
        if (!(error instanceof Error)) {
            return res.sendStatus(500);
        }

        if (error.message === "Not found") {
            return res.status(404).json({ message: 'Film not found' });
        }

        if (error.message === "Conflict") {
            return res.status(409).json({ message: 'Comment conflict' });
        }

        return res.sendStatus(500);
    }
});

router.delete("/films/:filmId", authorize, (req, res) => {
    const filmId = Number(req.params.filmId);
    if (
        isNaN(filmId) ||
        filmId <= 0 ||
        !("user" in req) ||
        typeof req.user !== "object" ||
        !req.user ||
        !("username" in req.user) ||
        typeof req.user.username !== "string"
    ) {
        return res.status(400).json({ message: 'Invalid request data' });
    }

    const username = req.user.username;

    try {
        const deletedComments = deleteOne(filmId, username);
        return res.send(deletedComments);
    } catch (error) {
        if (!(error instanceof Error)) {
            return res.sendStatus(500);
        }

        if (error.message === "Not found") {
            return res.status(404).json({ message: 'Comment not found' });
        }

        return res.sendStatus(500);
    }
});

export default router;