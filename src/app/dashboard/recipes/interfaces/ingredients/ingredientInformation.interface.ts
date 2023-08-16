export interface IngredientInformation {
  id:                number;
  original:          string;
  originalName:      string;
  name:              string;
  amount:            number;
  unit:              string;
  unitShort:         string;
  unitLong:          string;
  possibleUnits:     string[];
  estimatedCost:     EstimatedCost;
  consistency:       string;
  shoppingListUnits: string[];
  aisle:             string;
  image:             string;
  meta:              any[];
  nutrition:         Nutrition;
  categoryPath:      string[];
}

export interface EstimatedCost {
  value: number;
  unit:  string;
}

export interface Nutrition {
  nutrients:        Flavonoid[];
  properties:       Flavonoid[];
  flavonoids:       Flavonoid[];
  caloricBreakdown: CaloricBreakdown;
  weightPerServing: WeightPerServing;
}

export interface CaloricBreakdown {
  percentProtein: number;
  percentFat:     number;
  percentCarbs:   number;
}

export interface Flavonoid {
  name:                 string;
  amount:               number;
  unit:                 string;
  percentOfDailyNeeds?: number;
}

export interface WeightPerServing {
  amount: number;
  unit:   string;
}
