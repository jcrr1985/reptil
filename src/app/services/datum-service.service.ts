import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
// import { datumType } from '../shared/datum';

@Injectable({
  providedIn: 'root'
})
export class DatumServiceService {

  baseurl = 'http://localhost:3000/';

  constructor(private http:HttpClient) { }

    // Http Headers
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

  // GET
  GetIssues1(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + 'datum1/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  GetIssues2(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + 'datum2/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
   // Error handling
   errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
