import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employee: Employee = new Employee();

  // email = 'alexmartin@beba.com'
  // password = 'pass'
  invalidLogin = false

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.authService.authenticate(this.employee.email, this.employee.password)) {
      this.router.navigate(['/'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  loginUser(){
    this.authService.loginUser(this.employee).subscribe(
      data => console.log("Response recieved"),
    )
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
