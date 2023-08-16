export interface MenuItemDetail {
  id:               number;
  title:            string;
  restaurantChain:  string;
  nutrition:        Nutrition;
  badges:           any[];
  breadcrumbs:      string[];
  generatedText:    null;
  imageType:        string;
  likes:            number;
  servings:         Servings;
  price:            null;
  spoonacularScore: null;
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
