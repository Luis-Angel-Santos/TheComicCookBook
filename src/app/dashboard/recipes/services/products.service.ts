import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroceryProducts, Product } from '../interfaces/products/groceryProducts.interface';
import { ProductInformationUPC } from '../interfaces/products/productInformationUPC.interface';
import { SearchSuggestions } from '../interfaces/products/searchSuggestions.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private urlAPI: string = environment.endPointAPI+'food/products/';
  private apiKey: string = environment.apiKey;
  private httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  //obtener productos envasados
  getGroceryProducts(query: string):Observable<GroceryProducts>{
    return this.httpClient.get<GroceryProducts>(`${this.urlAPI}search?apiKey=${this.apiKey}&query=${query}`);
  }

  //obtener informacion de un producto envasado por su upc
  getGroceryProductByUPC(upc: string):Observable<ProductInformationUPC>{
    return this.httpClient.get<ProductInformationUPC>(`${this.urlAPI}upc?apiKey=${this.apiKey}&upc=${upc}`);
  }

  //obtener informacion de un producto por su id
  getProductById(id: string):Observable<Product>{
    return this.httpClient.get<Product>(`${this.urlAPI}${id}?apiKey=${this.apiKey}`);
  }

  //obtener productos similares a un producto por su upc
  getSimilarProductsByUPC(upc: string):Observable<GroceryProducts>{
    return this.httpClient.get<GroceryProducts>(`${this.urlAPI}upc/${upc}/comparable?apiKey=${this.apiKey}`);
  }

  //obtener autosugerencias de busqueda
  getSearchSuggestions(query: string):Observable<SearchSuggestions>{
    return this.httpClient.get<SearchSuggestions>(`${this.urlAPI}suggest?apiKey=${this.apiKey}&query=${query}&number=5`);
  }

}
