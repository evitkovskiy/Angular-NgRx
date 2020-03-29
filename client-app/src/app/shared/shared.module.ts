import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [HeaderComponent, PaginationComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, PaginationComponent]
})
export class SharedModule { }
