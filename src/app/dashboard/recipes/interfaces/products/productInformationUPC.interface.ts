export interface ProductInformationUPC {
  id:               number;
  title:            string;
  badges:           string[];
  importantBadges:  string[];
  breadcrumbs:      string[];
  generatedText:    string;
  imageType:        string;
  ingredientCount:  null;
  ingredientList:   string;
  ingredients:      Ingredient[];
  likes:            number;
  nutrition:        Nutrition;
  price:            number;
  servings:         Servings;
  spoonacularScore: number;
}

export interface Ingredient {
  description:  null;
  name:         string;
  safety_level: null;
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
