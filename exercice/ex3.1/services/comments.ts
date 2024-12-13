import path from "node:path";

import { Comment } from "../types";

import {parse, serialize} from "../utils/json";
import {readOne} from "./films";

const jsonDBPath = path.resolve(__dirname, "../../db/comments.json");

const readALL = (filmId: number | undefined = undefined): Comment[] => {
    const comments = parse<Comment>(jsonDBPath);

    return filmId
    ? comments.filter((comment) => comment.filmId === filmId)
    : comments;
};

const createOne = (comment : Comment): void => {
    const comments = parse<Comment>(jsonDBPath);

    const filmFound = readOne(comment.filmId);
    if(!filmFound){
        throw new Error("Not found");
    }

    const userHasCommented = comments.some(
        (c) => c.filmId === comment.filmId && c.username === comment.username
    );

    if(userHasCommented){
        throw new Error("Conflict");
    }

    comments.push(comment);
    serialize(jsonDBPath, comments);
};

const deleteOne = (filmId: number, username: string): Comment => {
const comments = parse<Comment>(jsonDBPath);

const commentIndex = comments.findIndex(
    (comment) => comment.filmId === filmId && comment.username === username
);

if(commentIndex === -1){
    throw new Error("Not found");
}

const deletedComments = comments.splice(commentIndex, 1);
serialize(jsonDBPath, comments);

    return deletedComments[0];
};


export {readALL, createOne, deleteOne};