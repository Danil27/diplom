import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientHome } from 'src/app/home/httpHome.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [HttpClientHome]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private httpClientHome: HttpClientHome
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (localStorage.getItem("currentUser")) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    this.httpClientHome.getDataPost("addUser", {
      "firstname": this.registerForm.value.firstname,
      "lastname": this.registerForm.value.lastname,
      "username": this.registerForm.value.username,
      "password": this.registerForm.value.password
    }).subscribe();
  }
}
