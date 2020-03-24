import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import {map} from 'rxjs/operators'

import {Store, select} from '@ngrx/store';
import {IAppState} from './../../../store/state/app.state';
import { selectedProductList } from './../../../store/selectors/product.selector';
import { GetProducts } from './../../../store/actions/products.action'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public products$ = this._store.pipe(select(selectedProductList))

  public shopProducts: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService : AuthService,
    private _store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this._store.dispatch(new GetProducts());
    this.products$.subscribe(data => console.log(data))
    this.route.data.subscribe(data => {
      this.shopProducts = data;
    })

    // this.authService.getShops().subscribe(data => {
    //   this.shopProducts = data;
    //   console.log(this.shopProducts)
    // })
    
  }

  public getCar(carId) {
    this.router.navigate([`shop/${carId}`])
  }

}
