import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Activity } from '../activity';
import { RegisterEmployeeService } from '../register-employee.service';


@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent implements OnInit {
  selectedOption = 0;
  preferredActivities$: Observable<Activity[]> = of([]);

  constructor(private fb: FormBuilder, private registerEmployeeService: RegisterEmployeeService) { }

  ngOnInit() {
    this.preferredActivities$ = this.registerEmployeeService.getActivity();
  }

  registrationForm = this.fb.group({
    givenName: ['', Validators.required],
    insertions: [''],
    familyName: ['', Validators.required],
    streetName: ['', Validators.required],
    houseNumber: ['', Validators.required],
    postalCode: ['', Validators.required],
    city: ['', Validators.required],
    phoneNumber: [''],
    emailAddress: ['', Validators.email],
    preferredActivityId: [''],
    vegan: false,
    vegetarian: false,
    glutenFree: false,
    lactoseFree: false,
    hasEnteredFormTruthfully: [false, Validators.requiredTrue]
  });

  public onSubmit(): void {
    this.registerEmployeeService.registerEmployee(this.registrationForm.value).subscribe(() => console.log("Empolyee is registerd"));
    console.warn(this.registrationForm.value);
  }

}

function Of(arg0: never[]): Observable<Activity[]> {
  throw new Error('Function not implemented.');
}
