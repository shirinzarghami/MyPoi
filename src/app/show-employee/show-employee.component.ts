import { Component, OnInit } from '@angular/core';
import { RegisterEmployeeService } from '../register-employee.service';
import { Employee, EmployeeListApiModel, EmployeeListItem } from '../employee';
import { Observable, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Activity } from '../activity';



@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.scss']
})
export class ShowEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['givenName', 'registeredAtUTC', 'emailAddress', 'preferredActivity'];
  dataSource = new MatTableDataSource<EmployeeListItem>();
  preferredActivities$: Observable<Activity[]> = of([]);
  employeesData$: Observable<EmployeeListApiModel> = this.registerEmployeeService.getEmployee();
  selectedActivity = "";
  activities: Activity[] = [];

  constructor(private registerEmployeeService: RegisterEmployeeService) { }

  public ngOnInit() {
    this.preferredActivities$ = this.registerEmployeeService.getActivity();
    this.employeesData$.subscribe(employee => {
      this.dataSource.data = employee.Result
    })

    this.preferredActivities$.subscribe(activities => {this.activities = activities})
  }

  onChange($event: any) {
    if (this.activities.length > 0) {
      let selectedActivity = this.activities?.find(activity => activity.Id == $event)
      selectedActivity && selectedActivity.Name ? this.dataSource.filter = selectedActivity.Name : ""
    }
  }
}
