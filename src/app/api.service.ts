import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpService } from './shared/providers/http.service';
import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:8080/products";
  private selectedProductURL = "http://localhost:8080/products/";

  constructor(private httpClient: HttpService) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public get(){
    return this.httpClient.get('products').pipe(catchError(this.handleError));
  }

  public getSelectedProduct(id){
    return this.httpClient.get('products/' + id).pipe(catchError(this.handleError));
  }

  public editProduct(id: string, productParams: any): Observable<any> {
    return this.httpClient.post('products', productParams)
      .pipe(
        catchError(this.handleError)
      );
  }
}
