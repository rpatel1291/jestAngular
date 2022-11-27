import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  constructor(private http: HttpClient) {}

  getDataV1(): Observable<any> {
    const url = 'https://josnplaceholder.typicode.com/todo/1';
    return this.http.get(url);
  }

  postDataV1(data: any): Observable<any> {
    const url = 'https://josnplaceholder.typicode.com/todo/1';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(data, url, httpOptions);
  }

  getDataV2(): Observable<any> {
    const url = 'https://josnplaceholder.typicode.com/todo/1';
    return this.http.get(url).pipe(
      tap((data: any) => console.log('Data fetched', data)),
      catchError(this.handleError('Failed to fetch data'))
    );
  }

  private handleError<T>(operation: any) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.log(error);
      const message = `server returned code ${error.status} with body "${error.error}"`;
      throw new Error(`${operation} failed: ${message}`);
    };
  }
}
