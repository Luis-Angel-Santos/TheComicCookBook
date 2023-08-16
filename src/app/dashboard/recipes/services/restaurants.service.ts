import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Restaurants } from '../interfaces/restaurants/restaurants.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private urlAPI: string = `${environment.endPointAPI}food/restaurants/`;
  private apiKey: string = environment.apiKey;
  private httpClient: HttpClient = inject(HttpClient);

  constructor() { }

   //busca restaurantes mediante ubicacion cercanos a 2 millas y tipo de restaurante
   getRestaurants(lat: number, lon: number, typeRestaurant: string): Observable<Restaurants> {
    return this.httpClient.get<Restaurants>(`${this.urlAPI}search?lat=${lat}&lon=${lon}&cuisine=${typeRestaurant}&distance=2&apiKey=${this.apiKey}`);
  }

}
