import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, Observable, throwError } from 'rxjs';
import {Card} from "../model/card";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  URL_SERVICES = 'http://54.213.89.252:8080'
  private urlBase = this.URL_SERVICES + "/api";
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient) { }

  getCardsByPassenger(passengerId: number) : Observable<any> {
    return this.http.get(this.urlBase + '/cards/by-passenger/' + passengerId).pipe(
        map(response => response as Card[]),
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

  createCard(card: Object) : Observable<Object> {
    return this.http.post(this.urlBase + '/cards', card, { headers: this.httpHeaders }).pipe(
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
