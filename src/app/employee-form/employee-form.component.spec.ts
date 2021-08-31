import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { RegisterEmployeeService } from '../register-employee.service';

import { EmployeeFormComponent } from './employee-form.component';

describe('RegisterEmployeeComponent', () => {
  let component: EmployeeFormComponent;
  let fixture: ComponentFixture<EmployeeFormComponent>;

  function configureTest(param?: { 'id': number }) {
    TestBed.configureTestingModule({
      declarations: [EmployeeFormComponent],
      providers: [
        FormBuilder,
        RegisterEmployeeService,
        {
          provide: ActivatedRoute, useValue: {
            snapshot: {
              params: param ? param : ''
            }
          }
        }
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, MatButtonModule,
        MatIconModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };


  it('should create', () => {
    configureTest()
    expect(component).toBeTruthy();
  });

  it('If url has id as parameter, the svaing button should not be visibel', () => {
    configureTest({ id: 2 })
    component.ngOnInit();
    expect(component.isNewEmployee).toBeFalsy()
  })

  it('If url does not have id as parameter, the svaing button should be visibel', () => {
    configureTest()
    component.ngOnInit();
    expect(component.isNewEmployee).toBeTruthy()
  })
});
