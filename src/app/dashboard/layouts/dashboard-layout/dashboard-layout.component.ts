import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
import { SwalBasicsService } from '../../../shared/services/swal-basics.service';
import { MenuItemService } from 'src/app/shared/services/menu-item.service';
import { MenuItem } from '../../interfaces/menu.item.interface';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  private authService = inject( AuthService );
  private swalBasicsService = inject( SwalBasicsService );
  private menuItemService = inject(MenuItemService);
  public user = computed( () => this.authService.currentUser() );
  public listaMenus: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItemService.getMenuItems().subscribe( menuItems => {
      this.listaMenus = menuItems;
      console.log(this.listaMenus);

    });
  }

  onLogout(){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas cerrar sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, cerrar sesión',
      cancelButtonText: 'No, cancelar',
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
    }).then( result => {
      this.swalBasicsService.showLoading();
      if(result.isConfirmed){
        this.swalBasicsService.hideLoading();
        this.authService.logout();
      }
      this.swalBasicsService.hideLoading();
    });
  }

}
