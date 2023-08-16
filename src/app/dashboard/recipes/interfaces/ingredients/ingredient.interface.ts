export interface Ingredients {
  results:      Ingredient[];
  offset:       number;
  number:       number;
  totalResults: number;
}

export interface Ingredient {
  id:    number;
  name:  string;
  image: string;
}

export interface ComputeIngredientAmount {
  amount: number;
  unit:   string;
}

export interface IngredientSubtitute {
  ingredient:  string;
  substitutes: string[];
  message:     string;
}
