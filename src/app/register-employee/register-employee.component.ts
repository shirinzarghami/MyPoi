import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterEmployeeService } from '../register-employee.service';

interface Activity {
  id: number
  name: string;
}
@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent {
  selectedOption = 0;

  constructor(private fb: FormBuilder, private registerEmployeeService: RegisterEmployeeService) { }

  //TODO: Check id of preferredActivities with BE
  preferredActivities: Activity[] = [
    { id: 1, name: 'Actief' },
    { id: 2, name: 'Eten' },
    { id: 3, name: 'Drank' },
    { id: 4, name: 'Gamen' },
  ];
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