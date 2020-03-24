import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable()
export class UnAuthInterceptor implements HttpInterceptor {

  constructor(private router : Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = request.clone();
    return next.handle(clone).pipe(
        tap((event: any) => {
            if(event.status === 401) this.router.navigate(['auth']);
        })
    )
    
  }
}
