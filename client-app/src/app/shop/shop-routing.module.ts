import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component'
import { ShopProductComponent } from './components/shop-product/shop-product.component';

const routes: Routes = [
  { 
    path: '', component: ShopComponent
  },
  { 
    path: ':id', component: ShopProductComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}