import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/dashboard/interfaces/menu.item.interface';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private baseUrl = environment.endPointAuth;
  private httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  public getMenuItems(): Observable<MenuItem[]> {
    return this.httpClient.get<MenuItem[]>(`${this.baseUrl}/auth/menu-items`);
  }

}
