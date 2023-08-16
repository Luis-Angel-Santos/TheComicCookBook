export interface Ingredients {
  ingredients: Ingredient[];
}

export interface Ingredient {
  amount: Amount;
  image:  string;
  name:   string;
}

export interface Amount {
  metric: Metric;
  us:     Metric;
}

export interface Metric {
  unit:  string;
  value: number;
}
