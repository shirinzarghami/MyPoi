import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class RegisterEmployeeService {

  constructor(private http: HttpClient) { }
  registerEmployeeUrl = "/api/Employee";
  registerEmployee(employee: Employee): Observable<string> {
    return of("Employee is registered");

    // this.http.post<Employee>(this.registerEmployeeUrl, employee)
    //   .pipe(
    //     catchError(this.handleError('registerEmployee', employee))
    //   );
  }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.registerEmployeeUrl);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
