import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Activity } from '../activity';
import { Employee } from '../employee';
import { RegisterEmployeeService } from '../register-employee.service';


@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent implements OnInit {
  selectedOption = 0;
  preferredActivities$: Observable<Activity[]> = of([]);
  employee!: Observable<Employee>;
  showEmployeeDetailsHeader = false;
  pageTitel = "Nieuwe medewerker";

  constructor(private fb: FormBuilder, private registerEmployeeService: RegisterEmployeeService, private route: ActivatedRoute,) { }

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
    this.registerEmployeeService.registerEmployee(this.registrationForm.value).subscribe(() => console.log("Empolyee is registerd"));
    console.warn(this.registrationForm.value);
  }

  private ShowEmployeeDetails(): void {
    this.registerEmployeeService.geEmployee(this.route.snapshot.params.id).subscribe(
      selectedEmployee => {
        this.registrationForm.patchValue(selectedEmployee);
        this.registrationForm.disable();
        this.showEmployeeDetailsHeader = true;
        this.pageTitel = `${selectedEmployee.GivenName} ${selectedEmployee.FamilyName}`
      })
  }
}
