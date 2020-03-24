import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public setData(email: string, password: string): Observable<any> {
    return this.http.post<any>(`login`, {
      email,
      password
    },
    {observe: 'response'})
    .pipe(map(response => {
      return response.body
    }
      ));
  }

  public isAuth(): Promise<boolean> {
    return new Promise(resolve => {
      resolve(!!localStorage.getItem('token'))
    });
  }

  public getUserData() {
    return this.http.get(`userdata`);
  }

  public getShops(): Observable<any> {
    return this.http.get<any>('static/db.json');
  }
  }
