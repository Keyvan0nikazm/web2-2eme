interface Film{
    id : number;
    title: string;
    director: string;
    duration: number;
    url?: string;
    description?: string;
    budget?: number;
}

export type {Film};