export interface SuggestBotChat {
  suggests: Suggests;
  words:    any[];
}

export interface Suggests {
  _: Suggest[];
}

export interface Suggest {
  name: string;
}
