export interface RecipeInstructions {
  name:  string;
  steps: Step[];
}

export interface Step {
  equipment:   Ent[];
  ingredients: Ent[];
  number:      number;
  step:        string;
  length?:     Length;
}

export interface Ent {
  id:           number;
  image:        string;
  name:         string;
  temperature?: Length;
}

export interface Length {
  number: number;
  unit:   string;
}
