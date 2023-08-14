import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { SwalBasicsService } from '../../../shared/services/swal-basics.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private fb = inject( FormBuilder );
  private authService = inject( AuthService );
  private swalBasicsService = inject( SwalBasicsService );

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  login(){
    this.swalBasicsService.showLoading();
    const { email, password } = this.myForm.value;
    this.authService.login( email, password ).subscribe({
      next: ( ok ) => {
        //login ok
      },
      error: ( error ) => {
        this.swalBasicsService.hideLoading();
        this.swalBasicsService.showErrorAlert( error.message );
      }
    });
  }

}
