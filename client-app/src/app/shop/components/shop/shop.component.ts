import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Store, select} from '@ngrx/store';
import {IAppState} from './../../../store/state/app.state';
import { selectedProductList } from './../../../store/selectors/product.selector';
import { GetProducts, GetProduct } from './../../../store/actions/products.action'
import { GetUser } from 'src/app/store/actions/user.action';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public form: FormGroup;
  public products$ = this._store.pipe(select(selectedProductList));

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _store: Store<IAppState>,
    private authService: AuthService
  ) { 
    this.initForm();
   }

  public initForm() {
    this.form = new FormGroup({
      search: new FormControl(null, Validators.required)
    })
  }
 
  ngOnInit(): void {
    this._store.dispatch(new GetProducts(''));
    this.route.data
      .subscribe(data => this._store.dispatch(new GetUser(data.userData)));
    this.getSearch();
  }

  public getShoes(shoesId) {
    this.router.navigate([`shop/product`, shoesId]);
  }

  private getSearch() {
    this.form.get('search').valueChanges
      .pipe(debounceTime(500))
      .subscribe(data => this._store.dispatch(new GetProducts(data)))
  }
}
