import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Store, select} from '@ngrx/store';
import {IAppState} from './../../../store/state/app.state';
import { selectSelectedProduct } from './../../../store/selectors/product.selector';
import { GetProduct, GetProducts } from './../../../store/actions/products.action'
import { GetUser } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})
export class ShopProductComponent implements OnInit {

  public shoes$ = this._store.pipe(select(selectSelectedProduct))

  constructor(private route: ActivatedRoute,
    private router: Router,
    private _store: Store<IAppState>) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this._store.dispatch(new GetUser(data.userData))
    })
    const shoesId = this.route.snapshot.params.id;
    this._store.dispatch(new GetProduct(shoesId));
  }

  public btnBack() {
    this.router.navigate(['/shop'])
  }

}
