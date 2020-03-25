import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { selectedUser } from '../../../store/selectors/user.selector';
import { GetUser } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  public user$ = this._store.pipe(select(selectedUser))
  constructor (
    private authService: AuthService,
    private router: Router,
    private _store: Store<IAppState>
  ) {
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
        this._store.dispatch(new GetUser(data.dataUser));
        localStorage.setItem('token', data.token)
        this.router.navigate(['']);
      })
  }
}
