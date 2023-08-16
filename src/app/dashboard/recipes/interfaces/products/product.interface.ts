export interface Product {
  id:               number;
  title:            string;
  breadcrumbs:      string[];
  imageType:        string;
  badges:           string[];
  importantBadges:  string[];
  ingredientCount:  number;
  generatedText:    null;
  ingredientList:   string;
  ingredients:      Ingredient[];
  likes:            number;
  aisle:            string;
  nutrition:        Nutrition;
  price:            number;
  servings:         Servings;
  spoonacularScore: number;
}

export interface Ingredient {
  description:  null | string;
  name:         string;
  safety_level: SafetyLevel | null;
}

export enum SafetyLevel {
  High = "high",
  Low = "low",
  Medium = "medium",
}

export interface Nutrition {
  nutrients:        Nutrient[];
  caloricBreakdown: CaloricBreakdown;
}

export interface CaloricBreakdown {
  percentProtein: number;
  percentFat:     number;
  percentCarbs:   number;
}

export interface Nutrient {
  name:                string;
  amount:              number;
  unit:                string;
  percentOfDailyNeeds: number;
}

export interface Servings {
  number: number;
  size:   number;
  unit:   string;
}
