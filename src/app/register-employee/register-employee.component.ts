import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  selectedOption=0;

  constructor(private fb: FormBuilder) { }

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
    familyName: [''],
    streetName:[''],
    houseNumber:[''],   
    postalCode:[''],
    city: [''],
    phoneNumber: [''],
    emailAddress: [''],
    preferredActivityId:[''],
    vegan: [''],
    vegetarian: false,
    glutenFree: false,
    lactoseFree: false,
    hasEnteredFormTruthfully: false 
  });

  public onSubmit():void {
    // TODO: Use EventEmitter with form value
    console.warn(this.registrationForm.value);
  }

}