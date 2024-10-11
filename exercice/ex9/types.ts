interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

interface Film {
  id : number;
  title : string;
  director : string;
  duration : number;
  budget? : number;
  description? : string;
  imageUrl? : string;
}

enum level {
  beginner = "beginner",
  intermediate = "intermediate",
  advanced = "advanced",
}

interface dactilographie {
  id : Number;
  content : String;
  level : level;
}

type NewPizza = Omit<Pizza, "id">;
type NewFilm = Omit<Film, "id">;
type NewDactilographie =   Omit<dactilographie, "id">;

export type { Pizza, NewPizza, PizzaToUpdate, Film, NewFilm, NewDactilographie };
