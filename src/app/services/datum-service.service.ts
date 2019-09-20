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
  constructor(private http: HttpClient) { }

  //GET Brands from API

  getBrands(): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + "brands" )
   
  };

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // GET para traer la data de la api que crea los charts concatendandolo con los las props, suscribiendo, asignando a varibles, y usando estas como parametros de alimetacion con data  a los chartGenerators.
  GetIssues(p): Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + p)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  getProductDetail(id){
    return this.http.get<any>('/product-details/' + id)
  }

  //Forining the API: ask in stack overlflow


  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
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
