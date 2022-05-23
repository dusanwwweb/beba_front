import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  //private readonly url = environment.apiBaseUrl;

  constructor() { }

  public authenticate(email: string, password: string) {
    if (email === "alexmartin@beba.com" && password === "pass") {
      sessionStorage.setItem('email', email)
      return true;
    } else {
      return false;
    }
  }

  public isEmployeeLoggedIn() {
    let employee = sessionStorage.getItem('email')
    // console.log(!(employee === null))
    return !(employee === null)
  }

  public logOut() {
    sessionStorage.removeItem('email')
  }
}


