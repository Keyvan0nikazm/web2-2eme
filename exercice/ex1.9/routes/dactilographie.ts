/*import {Router} from 'express';
import { NewDactilographie } from '../types';
import { containsOnlyExpectedKeys } from '../utils/validate';

import {
    readALLDactilographie,
    filterDactilographie,
    readOneDactilographie,
    createDactilographie,
    deleteDactilographie,
    updateDactilographie,
} from '../services/dactilographie';

const router = Router();

const expectedKey = ["content", "level"];

router.get("/" , (res, req) => {
    const allFilm = readALLDactilographie();
    return allFilm;
})

export default router;*/