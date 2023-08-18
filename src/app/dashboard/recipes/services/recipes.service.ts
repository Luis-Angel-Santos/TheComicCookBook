import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Recipe, RecipeDescription, Recipes, Taste } from '../interfaces/recipes/recipe.interface';
import { Nutrition } from '../interfaces/ingredients/ingredientInformation.interface';
import { Ingredients } from '../interfaces/ingredients/ingredient.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private urlAPI: string = `${environment.endPointAPI}recipes/`;
  private apiKey: string = environment.apiKey;
  private httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  //obtener 15 recetas aleatorias
  getRamdomRecipes(): Observable<Recipes> {
    return this.httpClient.get<Recipes>(`${this.urlAPI}random?apiKey=${this.apiKey}&number=15`);
  }

  //obtener recetas similares
  getSimilarRecipes(idRecipe: number): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`${this.urlAPI}${idRecipe}/similar?apiKey=${this.apiKey}`);
  }

  //obtener informacion de una receta
  getRecipe(idRecipe: string): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`${this.urlAPI}${idRecipe}/information?apiKey=${this.apiKey}`);
  }

  //obtener recetas por busqueda coompleja
  getRecipesByComplexSearch(query: string, parameters: string): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`${this.urlAPI}complexSearch?apiKey=${this.apiKey}&query=${query}&${parameters}`);
  }

  //obtener recetas por nutrientes
  getRecipesByNutrients(nutrients: string): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`${this.urlAPI}findByNutrients?apiKey=${this.apiKey}&${nutrients}`);
  }

  //obtener recetas por ingredientes
  getRecipesByIngredients(ingredients: string, number: number): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`${this.urlAPI}findByIngredients?apiKey=${this.apiKey}&ingredients=${ingredients}&number=${number}`);
  }

  //obtener autocompletado al buscar recetas
  getAutocompleteRecipes(query: string, number: number): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`${this.urlAPI}autocomplete?apiKey=${this.apiKey}&number=${number}&query=${query}`);
  }

  //obtener nutricion por el nombre de la receta
  getNutritionByName(name: string): Observable<Nutrition> {
    return this.httpClient.get<Nutrition>(`${this.urlAPI}guessNutrition?apiKey=${this.apiKey}&title=${name}`);
  }

  //obtener ingredientes de una receta
  getIngredients(idRecipe: number): Observable<Ingredients> {
    return this.httpClient.get<Ingredients>(`${this.urlAPI}${idRecipe}/ingredientWidget.json?apiKey=${this.apiKey}`);
  }

  //obtener descripcion de una receta
  getSummary(idRecipe: number): Observable<RecipeDescription> {
    return this.httpClient.get<RecipeDescription>(`${this.urlAPI}${idRecipe}/summary?apiKey=${this.apiKey}`);
  }

  //obtener instrucciones de una receta
  getInstructions(idRecipe: number): Observable<RecipeDescription> {
    return this.httpClient.get<RecipeDescription>(`${this.urlAPI}${idRecipe}/analyzedInstructions?apiKey=${this.apiKey}`);
  }

  //obtener sabores de una receta
  getFlavors(idRecipe: number): Observable<Taste> {
    return this.httpClient.get<Taste>(`${this.urlAPI}${idRecipe}/tasteWidget.json?apiKey=${this.apiKey}`);
  }

}
