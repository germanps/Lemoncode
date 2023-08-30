import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Práctica de Angular';

  constructor(private _authService: AuthService) {

  }
  isLogged() {
    return this._authService.isLogged();
  }
}
