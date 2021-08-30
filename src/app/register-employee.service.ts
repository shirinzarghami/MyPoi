import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Activity } from './activity';
import { Employee, EmployeeListApiModel } from './employee';
@Injectable({
  providedIn: 'root'
})
export class RegisterEmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeUrl = "/api/Employee";
  activityUrl = "/api/Activity";

  registerEmployee(employee: Employee): Observable<string> {
    return of("Employee is registered");

    // this.http.post<Employee>(this.registerEmployeeUrl, employee)
    //   .pipe(
    //     catchError(this.handleError('registerEmployee', employee))
    //   );
  }

  getEmployes(): Observable<EmployeeListApiModel> {
    return this.http.get<EmployeeListApiModel>(this.getEmployeeUrl);
  }

  getActivity(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activityUrl);
  }

geEmployee(id:number): Observable<Employee> {
  return this.http.get<Employee>(`${this.getEmployeeUrl}/${id}`)
}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
