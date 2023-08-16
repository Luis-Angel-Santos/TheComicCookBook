import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SwalBasicsService } from 'src/app/shared/services/swal-basics.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private fb = inject( FormBuilder );
  private authService = inject( AuthService );
  private swalBasicsService = inject( SwalBasicsService );
  private router = inject( Router );
  public ocultarPassword: boolean = true;
  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    name: ['', [Validators.required, Validators.minLength(3)]]
  });

  register(){
    this.swalBasicsService.showLoading();
    const { name, email, password } = this.myForm.value;
    this.authService.register( name, email, password ).subscribe({
      next: ( ok ) => {
        this.swalBasicsService.hideLoading();
        this.swalBasicsService.showSuccessAlert('Registro Exitoso')
          .then( () => {
            this.router.navigateByUrl('/dashboard');
          });

      },
      error: ( error ) => {
        this.swalBasicsService.hideLoading();
        this.swalBasicsService.showErrorAlert( error );
      }
    });
  }

}
