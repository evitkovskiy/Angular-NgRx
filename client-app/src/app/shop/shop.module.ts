import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module'
import { CoreModule } from '../core/core.module';
import { ShopComponent } from './components/shop/shop.component';
import { ShopProductComponent } from './components/shop-product/shop-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ShopComponent, ShopProductComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShopModule { }
