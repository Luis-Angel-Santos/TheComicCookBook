import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { AllFood } from '../interfaces/misc/allFood.interface';
import { FoodVideos } from '../interfaces/misc/foodVideos.interface';
import { JokeFood } from '../interfaces/misc/jokeFood.interface';
import { BotResponse } from '../interfaces/misc/botResponse.interface';
import { SuggestBotChat } from '../interfaces/misc/suggestBotChat.interface';

@Injectable({
  providedIn: 'root'
})
export class MiscService {

  private urlAPI: string = `${environment.endPointAPI}food/`;
  private apiKey: string = environment.apiKey;
  private httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  //obtener toda la comida mediante un query
  getAllFood(query: string): Observable<AllFood> {
    return this.httpClient.get<AllFood>(`${this.urlAPI}search?query=${query}&number=10&apiKey=${this.apiKey}`);
  }

  //buscar videos de comida mediante el nombre y tipo de comida
  getFoodVideos(query: string, typeFood: string): Observable<FoodVideos> {
    return this.httpClient.get<FoodVideos>(`${this.urlAPI}videos/search?query=${query}&number=10&cuisine=${typeFood}&apiKey=${this.apiKey}`);
  }

  //obtener una broma ramdom de comida
  getFoodJoke(): Observable<JokeFood> {
    return this.httpClient.get<JokeFood>(`${this.urlAPI}jokes/random?apiKey=${this.apiKey}`);
  }

  //obtener una trivia ramdom de comida
  getFoodTrivia(): Observable<JokeFood> {//Joke y Trivias es la misma interface
    return this.httpClient.get<JokeFood>(`${this.urlAPI}trivia/random?apiKey=${this.apiKey}`);
  }

  //hablar con el bot
  talkWithBot(message: string): Observable<BotResponse> {
    return this.httpClient.get<BotResponse>(`${this.urlAPI}coverse?text=${message}&apiKey=${this.apiKey}`);
  }

  //sugerencias de conversaciones con el bot
  talkWithBotSuggestion(query: string): Observable<SuggestBotChat> {
    return this.httpClient.get<SuggestBotChat>(`${this.urlAPI}coverse/suggest?query=${query}&number=10&apiKey=${this.apiKey}`);
  }

}
