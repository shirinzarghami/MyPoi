import { Component, OnInit } from '@angular/core';
import { RegisterEmployeeService } from '../register-employee.service';
import { Employee, EmployeeListApiModel, EmployeeListItem } from '../employee';
import { Observable, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Activity } from '../activity';
import { Router } from '@angular/router';



@Component({
  selector: 'app-show-employes',
  templateUrl: './show-employes.component.html',
  styleUrls: ['./show-employes.component.scss']
})
export class ShowEmployesComponent implements OnInit {
  displayedColumns: string[] = ['givenName', 'registeredAtUTC', 'emailAddress', 'preferredActivity'];
  dataSource = new MatTableDataSource<EmployeeListItem>();
  preferredActivities$: Observable<Activity[]> = of([]);
  employesData$: Observable<EmployeeListApiModel> = this.registerEmployeeService.getEmployes();
  selectedActivity = "";
  activities: Activity[] = [];

  constructor(private registerEmployeeService: RegisterEmployeeService, private router: Router) { }

  public ngOnInit(): void {
    this.preferredActivities$ = this.registerEmployeeService.getActivity();
    this.employesData$.subscribe(employee => {
      this.dataSource.data = employee.Result
    })
    this.preferredActivities$.subscribe(activities => { this.activities = activities })
  }

  public onChange($event: any): void {
    if (this.activities.length > 0) {
      let selectedActivity = this.activities?.find(activity => activity.Id == $event)
      selectedActivity && selectedActivity.Name ? this.dataSource.filter = selectedActivity.Name : ""
    }
  }

  public registerNewEmployee(): void {
    this.router.navigateByUrl('/registerEmployee');
  }

  showEmployeeInfo(id: number) {
    this.router.navigateByUrl(`/registerEmployee/${id}`)
  }
}