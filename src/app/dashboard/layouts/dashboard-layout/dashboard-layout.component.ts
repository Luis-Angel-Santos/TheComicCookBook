import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
import { SwalBasicsService } from '../../../shared/services/swal-basics.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  private authService = inject( AuthService );
  private swalBasicsService = inject( SwalBasicsService );
  public user = computed( () => this.authService.currentUser() );

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
    });
  }

}
