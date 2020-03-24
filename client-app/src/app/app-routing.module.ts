import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectGuard } from './core/guards/redirect.guard';
import { UserdataResolver } from './core/resolvers/userData.resolver';
import { ShopComponent } from './shop/components/shop/shop.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'shop', pathMatch: 'full'
  },
  {
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'shop', 
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule),
    canActivate: [RedirectGuard],
    resolve: {
      userData: UserdataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
