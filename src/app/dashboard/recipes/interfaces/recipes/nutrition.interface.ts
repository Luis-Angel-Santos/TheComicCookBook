export interface Nutrition {
  calories:    Calories;
  carbs:       Calories;
  fat:         Calories;
  protein:     Calories;
  recipesUsed: number;
}

export interface Calories {
  confidenceRange95Percent: ConfidenceRange95Percent;
  standardDeviation:        number;
  unit:                     string;
  value:                    number;
}

export interface ConfidenceRange95Percent {
  max: number;
  min: number;
}
