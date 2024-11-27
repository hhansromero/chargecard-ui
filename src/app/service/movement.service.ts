import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, Observable, throwError } from 'rxjs';
import { Movement } from '../model/movement';

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  URL_SERVICES = 'http://54.213.89.252:8080'
  private urlBase = this.URL_SERVICES + "/api";
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient) { }

  getMovementList() : Observable<any> {
    return this.http.get(this.urlBase + '/movements?metroCardId=2').
                         pipe(map(response => response as Movement[]),
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

  createMovement(movement: Object) : Observable<Object> {
    return this.http.post(this.urlBase + '/movements', movement, { headers: this.httpHeaders }).pipe(
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
