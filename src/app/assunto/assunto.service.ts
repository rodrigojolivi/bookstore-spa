import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Assunto } from './assunto';

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {

  private apiURL = "https://localhost:7009/api/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + 'assuntos')

      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(assunto: Assunto): Observable<any> {

    return this.httpClient.post(this.apiURL + 'assuntos/', JSON.stringify(assunto), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(codigo: number): Observable<any> {

    return this.httpClient.get(this.apiURL + 'assuntos/' + codigo)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(codigo: number, assunto: Assunto): Observable<any> {

    return this.httpClient.put(this.apiURL + 'assuntos/' + codigo, JSON.stringify(assunto), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(codigo: number) {
    return this.httpClient.delete(this.apiURL + 'assuntos/' + codigo, this.httpOptions)

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