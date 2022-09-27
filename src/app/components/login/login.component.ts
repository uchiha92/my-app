import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  submitted: boolean;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
    this.submitted = false;
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formLogin.controls;
  }

  loginWithGoogle(){
    this.userService.loginWithGoogle();
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.formLogin.invalid) {
      return;
    }

    const email = this.formLogin.get(['email'])?.value;
    const password = this.formLogin.get(['password'])?.value;

    const validatedValues = { email, password };

    this.userService
      .login(validatedValues)
      .then((response) => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            return this.formLogin
              .get('email')
              ?.setErrors({
                usedEmail: true,
                errorMessage: 'El email introducido ya existe.',
              });
          case 'auth/weak-password':
            return this.formLogin
              .get('password')
              ?.setErrors({
                minlength: true,
                errorMessage: 'La contraseña debe tener al menos 6 caracteres.',
              });
          default:
            alert(error.code/*'Lo sentimos. Ocurrió un error inesperado.'*/);
            break;
        }
      });
  }
}
