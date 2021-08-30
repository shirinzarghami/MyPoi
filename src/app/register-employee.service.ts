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

  public registerEmployee(employee: Employee): Observable<string> {
    return of("Employee is registered");
    // Posting to the server return internal server error(500). Therefor this code has been commented out.
    // this.http.post<Employee>(this.registerEmployeeUrl, employee)
    //   .pipe(
    //     catchError(this.handleError('registerEmployee', employee))
    //   );
  }

  public getEmployes(): Observable<EmployeeListApiModel> {
    return this.http.get<EmployeeListApiModel>(this.getEmployeeUrl);
  }

  public getActivity(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activityUrl);
  }

  public geEmployee(id: number): Observable<Employee> {
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
