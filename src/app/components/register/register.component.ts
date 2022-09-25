import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, FormBuilder, ValidationErrors } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Validation } from 'src/app/utils/validation';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  submitted: boolean;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { 
    this.formRegister = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    });
    this.submitted = false;
  }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      email:  ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirmPassword:  ['', Validators.required]
    },
    { validators: [Validation.match('password', 'confirmPassword')]})
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formRegister.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.formRegister.invalid) {
      return;
    }

    const email = this.formRegister.get(['email'])?.value;
    const password = this.formRegister.get(['password'])?.value;

    const validatedValues = {email, password};

    console.log(validatedValues);

    this.userService.register(validatedValues)
    .then(response => {

    })
    .catch(error => {
      switch (error.code) {
        case "auth/email-already-in-use":
          return this.formRegister.get('email')?.setErrors({ usedEmail: true, errorMessage: 'El email introducido ya existe.' });
        case "auth/weak-password":
          return this.formRegister.get('password')?.setErrors({ minlength: true, errorMessage: 'La contraseña debe tener al menos 6 caracteres.' });
        default:
          alert("Ocurrió un error inesperado");
          break;
      }
    });
  }
}
