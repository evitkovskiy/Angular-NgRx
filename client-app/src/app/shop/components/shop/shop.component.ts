import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Store, select} from '@ngrx/store';
import {IAppState} from './../../../store/state/app.state';
import { selectedProductList } from './../../../store/selectors/product.selector';
import { GetProducts, GetProduct } from './../../../store/actions/products.action'
import { GetUser } from 'src/app/store/actions/user.action';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { debounceTime, delay } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConnectionService } from 'src/app/core/services/connection.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public form: FormGroup;
  public products$ = this._store.pipe(select(selectedProductList));
  public paginatorParameters = {
    page: 1,
    size: 8
  }
  public searchString: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _store: Store<IAppState>,
    private connecionService: ConnectionService
  ) { 
    this.initForm();
   }

  public initForm() {
    this.form = new FormGroup({
      search: new FormControl(null, Validators.required)
    })
  }
 
  ngOnInit(): void {
    this._store.dispatch(new GetProducts('', this.paginatorParameters));
    this.route.data
      .subscribe(data => this._store.dispatch(new GetUser(data.userData)));
    this.getSearch();
    this.products$
    .subscribe(data => {
      if (data) {
        this.connecionService.setLimitData(data.limit);
      }
    });
  }

  public getClothes(clothesId: string) {
    this.router.navigate([`shop/product`, clothesId]);
    this._store.dispatch(new GetProduct(clothesId));
  }

  private getSearch() {
    this.form.get('search').valueChanges
      .pipe(debounceTime(500))
      .subscribe(data => {
        this.searchString = data;
        this._store.dispatch(new GetProducts(data, this.paginatorParameters))})
  }

  public paginatorParams(event: any) {
    this.paginatorParameters = event;
  }
}
