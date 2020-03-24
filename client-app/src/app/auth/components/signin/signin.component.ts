import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  constructor (private authService: AuthService,
    private router: Router) {
    this.initForm();
   }

  ngOnInit() {
  }

  public initForm() {
    this.form = new FormGroup ({
      email: new FormControl (`1234@mail.com`, [Validators.required, Validators.email]),
      password: new FormControl(`1234567`, [Validators.required, Validators.minLength(6)])
    })
  }

  public submit() {
    const email: string = this.form.value.email;
    const password: string = this.form.value.password;
    
    this.authService.setData(email, password).subscribe(data => {
      
        localStorage.setItem('token', data.token)
        this.router.navigate(['']);
      })
  }
}
