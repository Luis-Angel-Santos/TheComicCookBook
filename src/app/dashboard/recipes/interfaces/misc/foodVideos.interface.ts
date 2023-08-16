export interface FoodVideos {
  videos:       FoodVideo[];
  totalResults: number;
}

export interface FoodVideo {
  title:      string;
  length:     number;
  rating:     number;
  shortTitle: string;
  thumbnail:  string;
  views:      number;
  youTubeId:  string;
}
