import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component'
import { ShopProductComponent } from './components/shop-product/shop-product.component';
import { UserdataResolver } from '../core/resolvers/userData.resolver';

const routes: Routes = [
  { 
    path: '', component: ShopComponent
  },
  { 
    path: 'product/:id', component: ShopProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}