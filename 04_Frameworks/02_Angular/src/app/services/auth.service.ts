import { Injectable } from '@angular/core';
import { IUserLogin } from '../models/login';
import { Router } from '@angular/router';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router) {

  }

  login(user: IUserLogin): Observable<boolean> {
    if (user.username === 'master8@lemoncode.net' && user.password === '12345678') {
    // if (user.username === 'q' && user.password === 'q') {
      localStorage.setItem('username', user.username)
      return of(true).pipe(delay(2000))
    }
    return of(false).pipe(delay(2000))
  }
  logout(): void {
    localStorage.removeItem('username')
    this._router.navigateByUrl('home') //GO Home!!
  }
  isLogged(): boolean {
    return localStorage.getItem('username') ? true : false
  }
  getUsername(): string {
    return localStorage.getItem('username') || ''
  }
}
