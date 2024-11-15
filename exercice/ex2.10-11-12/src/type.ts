interface Film{
    id : number;
    title: string;
    director: string;
    duration: number;
    url?: string;
    description?: string;
    budget?: number;
}

interface Movie{
    title: string;
    director: string;
    description: string;
}

export type {Film, Movie};