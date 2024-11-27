import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL_SERVICES = 'http://54.213.89.252:8080'
  private urlBase = this.URL_SERVICES + "/api";
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient) { }

  getUserByUserId(userId: number) : Observable<any> {
    return this.http.get(this.urlBase + '/users/' + userId).pipe(
      map(response => response as User),
      catchError(e => {
        alert(e.status+ ": " + e.error.message)
        return throwError(() => {
          const error: any = new Error(e.error.message);
          error.timestamp = Date.now();
          return error;
        });
      })
    );
  }

  updateUser(user: Object) : Observable<Object> {
    return this.http.put(this.urlBase + '/users/5', user, { headers: this.httpHeaders }).pipe(
        catchError(e => {
          alert(e.status+ ": " + e.error.message)
          return throwError(() => {
            const error: any = new Error(e.error.message);
            error.timestamp = Date.now();
            return error;
          });
        })
    );
  }
}
