import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly url = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  public loginUser(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.url}/auth/login/user`, employee);
  }

  public authenticate(email: string, password: string) {
    if (email === "alex@beba.com" && password === "pass") {
      sessionStorage.setItem('email', email)
      return true;
    } else {
      return false;
    }
  }

  public isEmployeeLoggedIn() {
    let employee = sessionStorage.getItem('email')
    return !(employee === null)
  }

  public logOut() {
    sessionStorage.removeItem('email')
  }
}


