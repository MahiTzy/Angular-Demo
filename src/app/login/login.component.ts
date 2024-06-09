import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  // outputs: ['chiledevent'],
  inputs: ['PData'],
})
export class LoginComponent {
  login(username: any, password: any) {
    if (username == 'admin' && password == 'admin') {
      sessionStorage.setItem('isLoggedIn', 'true');
      // alert('Login Success');
    } else {
      sessionStorage.setItem('isLoggedIn', 'false');
      // alert('Login Failed');
    }
  }
  constructor(private _cookie:CookieService) {
    this._cookie.set('name','Mohit');
    console.log(this._cookie.get('name'));
  
  }
  // chiledevent=new EventEmitter();
  // senddata(value: any) {
  //   this.chiledevent.emit(value);
  //   console.log(value);
  // }
  // PData: any;
}
