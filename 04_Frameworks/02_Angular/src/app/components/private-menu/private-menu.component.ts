import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-menu',
  templateUrl: './private-menu.component.html',
  styleUrls: ['./private-menu.component.scss']
})
export class PrivateMenuComponent {

  user: string
  userLogged: string

  constructor(private _authService: AuthService) {
    this.user = ''
    this.userLogged = ''
  }

  ngOnInit(): void {
    this.getUserNameLogged()
  }

  logOut() {
    return this._authService.logout()
  }

  getUserNameLogged() {
    const user = this._authService.getUsername().split('@')
    let userLogged: string = '';
    user.forEach(el => {
      userLogged += el.charAt(0).toLocaleUpperCase()
    });
    this.userLogged = userLogged
    this.user = this._authService.getUsername()
  }
}
