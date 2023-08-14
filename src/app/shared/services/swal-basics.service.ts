import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalBasicsService {

  constructor() { }

  showSuccessAlert( text: string ){
    return Swal.fire({
      title: 'Bien! :)',
      text: text,
      icon: 'success',
      showCancelButton: false,
      showConfirmButton: false,
      timer: 2000
    });
  }

  showErrorAlert( errorText: string ){
    return Swal.fire({
      title: 'Opps :(',
      text:  errorText,
      icon: 'error',
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: 'Ok',
      confirmButtonColor: '#3085d6'
    });
  }

  showLoading(){
    Swal.fire({
      title: 'Espere por favor...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }

  hideLoading(){
    Swal.close();
  }

}
