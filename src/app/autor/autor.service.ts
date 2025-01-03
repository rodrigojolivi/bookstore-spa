import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Autor } from './autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private apiURL = "https://localhost:7009/api/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + 'autores')

      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(autor: Autor): Observable<any> {

    return this.httpClient.post(this.apiURL + 'autores/', JSON.stringify(autor), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(codigo: number): Observable<any> {

    return this.httpClient.get(this.apiURL + 'autores/' + codigo)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(codigo: number, autor: Autor): Observable<any> {

    return this.httpClient.put(this.apiURL + 'autores/' + codigo, JSON.stringify(autor), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(codigo: number) {
    return this.httpClient.delete(this.apiURL + 'autores/' + codigo, this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}