export interface SimilarProducts {
  comparableProducts: ComparableProducts;
}

export interface ComparableProducts {
  calories:         any[];
  likes:            any[];
  price:            any[];
  protein:          Protein[];
  spoonacularScore: Protein[];
  sugar:            any[];
}

export interface Protein {
  difference: number;
  id:         number;
  image:      string;
  title:      string;
}
