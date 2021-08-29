import { Component, OnInit } from '@angular/core';
import { RegisterEmployeeService } from '../register-employee.service';
import { Employee, EmployeeListApiModel, EmployeeListItem } from '../employee';
import { Observable, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.scss']
})
export class ShowEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['givenName', 'registeredAtUTC', 'emailAddress', 'preferredActivity'];
  dataSource = new MatTableDataSource<EmployeeListItem>();
  employeesData$: Observable<EmployeeListApiModel> = this.registerEmployeeService.getEmployee();

  constructor(private registerEmployeeService: RegisterEmployeeService) { }

  public ngOnInit(){
    debugger
    this.employeesData$.subscribe(employee => {
      this.dataSource.data = employee.Result
    })
  }
}


