import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Ingredients, ComputeIngredientAmount, IngredientSubtitute } from '../interfaces/ingredients/ingredient.interface';
import { IngredientInformation } from '../interfaces/ingredients/ingredientInformation.interface';
import { IngredientToComplete } from '../interfaces/ingredients/ingredientToComplete.interface';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  private urlAPI: string = `${environment.endPointAPI}food/ingredients/`;
  private apiKey: string = environment.apiKey;
  private httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  //buscar comidas por ingredientes
  getIngredientsByName(name: string): Observable<Ingredients> {
    return this.httpClient.get<Ingredients>(`${this.urlAPI}search?apiKey=${this.apiKey}&query=${name}&number=15`);
  }

  //obtener la informacion de un ingrediente
  getIngredientInformation(idIngredient: number): Observable<IngredientInformation> {
    return this.httpClient.get<IngredientInformation>(`${this.urlAPI}${idIngredient}/information?apiKey=${this.apiKey}`);
  }

  //obtener la cantidad de un ingrediente para lograr cierto objetivo nutricional
  getComputeIngredientAmount(idIngredient: number, nutrient: string, target: number): Observable<ComputeIngredientAmount> {
    return this.httpClient.get<ComputeIngredientAmount>(`${this.urlAPI}${idIngredient}?apiKey=${this.apiKey}&nutrient=${nutrient}&target=${target}`);
  }

  //autocompletar busqueda de ingredientes
  getAutocompleteIngredients(query: string): Observable<IngredientToComplete[]> {
    return this.httpClient.get<IngredientToComplete[]>(`${this.urlAPI}autocomplete?apiKey=${this.apiKey}&query=${query}&number=15`);
  }

  //obtener subtitutos de un ingrediente por su nombre
  getSubstitutesByName(ingredientName: string): Observable<IngredientSubtitute> {
    return this.httpClient.get<IngredientSubtitute>(`${this.urlAPI}substitutes?apiKey=${this.apiKey}&ingredientName=${ingredientName}`);
  }

  //obtener subtitutos de un ingrediente por su id
  getSubstitutesById(idIngredient: number): Observable<IngredientSubtitute> {
    return this.httpClient.get<IngredientSubtitute>(`${this.urlAPI}${idIngredient}/substitutes?apiKey=${this.apiKey}`);
  }

}
