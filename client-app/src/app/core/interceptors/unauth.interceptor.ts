import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable()
export class UnAuthInterceptor implements HttpInterceptor {

  constructor(private router : Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = request.clone();
    return next.handle(clone).pipe(
        catchError(err => {
          if (err.status === 401) this.router.navigate(['auth']);
          return throwError(err);
        })
    )}
}
