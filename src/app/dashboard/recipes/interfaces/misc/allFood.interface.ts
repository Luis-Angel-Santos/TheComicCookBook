export interface AllFood {
  query:         string;
  totalResults:  number;
  limit:         number;
  offset:        number;
  searchResults: SearchResult[];
}

export interface SearchResult {
  name:         string;
  totalResults: number;
  results:      Result[];
}

export interface Result {
  id?:       number | string;
  name:      string;
  image:     null | string;
  link?:     null | string;
  type:      Type;
  relevance: number;
  content?:  string;
}

export enum Type {
  HTML = "HTML",
  YoutubeVideo = "YOUTUBE_VIDEO",
}
