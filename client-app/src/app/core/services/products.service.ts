import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  public getProducts(searchString: string, par: any) {
    const page = par.page;
    const size = par.size;
    return this.http.get('getData/filter', {
      params: {
        searchString,
        page,
        size
      }
    })
  }

  public getProduct(idProduct: string) {
    return this.http.get('getData/product', {
      params: {
        idProduct
      }
    })
  }
}
