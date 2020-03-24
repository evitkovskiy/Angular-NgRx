import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Store, select} from '@ngrx/store';
import {IAppState} from './../../../store/state/app.state';
import { selectedProductList, selectSelectedProduct } from './../../../store/selectors/product.selector';
import { GetProduct } from './../../../store/actions/products.action'

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})
export class ShopProductComponent implements OnInit {

  public car$ = this._store.pipe(select(selectSelectedProduct))

  constructor(private route: ActivatedRoute,
    private router: Router,
    private _store: Store<IAppState>) { }

  ngOnInit(): void {
    this._store.dispatch(new GetProduct(this.route.snapshot.url[0].path));
    console.log(this.car$)
  }

}
