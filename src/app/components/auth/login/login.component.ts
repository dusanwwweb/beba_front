import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email = 'alexmartin@beba.com'
  password = 'pass'
  invalidLogin = false

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.authService.authenticate(this.email, this.password)
    ) {
      this.router.navigate(['/'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
  
  // loginForm!: FormGroup;

  // constructor() { }

  // ngOnInit(): void {
  //   this.loginForm = new FormGroup({
  //     email: new FormControl('', Validators.required),
  //     password: new FormControl('', Validators.required)
  //   });
  // }

  // login(){
  //     console.log(this.loginForm);
  //     console.log(this.loginForm.value);
  // }
}
