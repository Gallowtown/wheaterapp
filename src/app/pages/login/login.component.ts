import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm() {
    this.formLogin = this.formBuilder.group({
      user: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    });
  }

  get userField() {
    return this.formLogin.get('user');
  }
  get passField() {
    return this.formLogin.get('pass');
  }

  save() {
    if (this.formLogin.valid) {
      localStorage.setItem('users', 'nevermindUser');
      this.router.navigate(['/', 'home']);
    } else {
      this.formLogin.markAllAsTouched();
    }
  }
}
