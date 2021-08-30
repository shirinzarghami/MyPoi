import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Activity } from '../activity';
import { Employee } from '../employee';
import { RegisterEmployeeService } from '../register-employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  selectedOption = 0;
  preferredActivities$!: Observable<Activity[]>;
  employee!: Observable<Employee>;
  isNewEmployee = true;
  pageTitel = "Nieuwe medewerker";

  constructor(private fb: FormBuilder, private registerEmployeeService: RegisterEmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.ShowEmployeeDetails();
    }
    this.preferredActivities$ = this.registerEmployeeService.getActivity();
  }

  registrationForm = this.fb.group({
    GivenName: ['', Validators.required],
    Insertions: [''],
    FamilyName: ['', Validators.required],
    StreetName: ['', Validators.required],
    HouseNumber: ['', Validators.required],
    PostalCode: ['', Validators.required],
    City: ['', Validators.required],
    PhoneNumber: [''],
    EmailAddress: ['', Validators.email],
    PreferredActivityId: [''],
    Vegan: false,
    Vegetarian: false,
    GlutenFree: false,
    LactoseFree: false,
    HasEnteredFormTruthfully: [false, Validators.requiredTrue]
  });

  public onSubmit(): void {
    this.registerEmployeeService.registerEmployee(this.registrationForm.value).subscribe(() => {
      console.log("Empolyee is registerd")
      this.router.navigateByUrl('/showEmployes')
    });
  }

  private ShowEmployeeDetails(): void {
    this.registerEmployeeService.geEmployee(this.route.snapshot.params.id).subscribe(
      selectedEmployee => {
        this.registrationForm.patchValue(selectedEmployee);
        this.registrationForm.disable();
        this.isNewEmployee = false;
        this.pageTitel = `${selectedEmployee?.GivenName} ${selectedEmployee?.FamilyName}`
      })
  }
}
