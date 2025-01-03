import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private apiURL = "https://localhost:7009/api/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + 'livros')

      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(livro: Livro): Observable<any> {

    return this.httpClient.post(this.apiURL + 'livros/', JSON.stringify(livro), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(codigo: number): Observable<any> {

    return this.httpClient.get(this.apiURL + 'livros/' + codigo)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(codigo: number, livro: Livro): Observable<any> {

    return this.httpClient.put(this.apiURL + 'livros/' + codigo, JSON.stringify(livro), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(codigo: number) {
    return this.httpClient.delete(this.apiURL + 'livros/' + codigo, this.httpOptions)

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