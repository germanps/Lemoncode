import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup,} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showError: boolean
  errorLoggin: string
  loading: boolean
  form: FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private _fb: FormBuilder, private _router: Router, private _authService: AuthService) {
    this.showError = false
    this.errorLoggin = 'El usuario no existe'
    this.loading = false
    this.form = this._fb.group({
      user: this.username,
      password: this.password,
    });
  }

  getError(_formControl: FormControl) {
    return _formControl.hasError('required') ? 'El campo es obligatorio' : '';
  }

  login() {
    this.loading = true
    this._authService.login({username: this.username.value!,password: this.password.value!}).subscribe((isLogged) => {
      if (isLogged) {
        console.log(isLogged);
        this.showError = false
        this.loading = false
        this._router.navigateByUrl('dashboard');
      } else {
        console.log(isLogged);
        this.loading = false
        this.showError = true
      }
    })
  }
}
