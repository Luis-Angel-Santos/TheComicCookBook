import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';
import Swal from 'sweetalert2';

export const AuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject( AuthService );
  const router = inject( Router );

  if(authService.authStatus() === AuthStatus.authenticated){
    return true;
  }

  Swal.fire({
    title: 'Opps! :(',
    text: 'Inicie sesión para continuar',
    icon: 'error',
    confirmButtonText: 'Vale',
    confirmButtonColor: 'green',
  }).then( () => router.navigateByUrl('/auth/login') );
  return false;

};
