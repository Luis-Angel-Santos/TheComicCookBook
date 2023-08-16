import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { MenuItems } from '../interfaces/menuItems/menuItems.interface';
import { MenuItemDetail } from '../interfaces/menuItems/menuItemDetail.interface';
import { MenuItemsSuggestions } from '../interfaces/menuItems/menuItemsSuggestions.interface';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  private urlAPI: string = `${environment.endPointAPI}food/menuItems/`;
  private apiKey: string = environment.apiKey;
  private httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  //buscar algun item de un menu en todos los restaurantes
  getMenuItem(menuItem: string): Observable<MenuItems> {
    return this.httpClient.get<MenuItems>(`${this.urlAPI}search?query=${menuItem}&number=10&apiKey=${this.apiKey}`);
  }

  //obtener la informacion detallada de un item de un menu por id
  getMenuItemDetailById(idMenuItem: string): Observable<MenuItemDetail> {
    return this.httpClient.get<MenuItemDetail>(`${this.urlAPI}${idMenuItem}?apiKey=${this.apiKey}`);
  }

  //autocompletado de busqueda de items de menu
  getMenuItemAutocomplete(menuItem: string): Observable<MenuItemsSuggestions> {
    return this.httpClient.get<MenuItemsSuggestions>(`${this.urlAPI}suggest?query=${menuItem}&number=10&apiKey=${this.apiKey}`);
  }

}
