import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterEmployeeService } from '../register-employee.service';

import { RegisterEmployeeComponent } from './register-employee.component';

describe('RegisterEmployeeComponent', () => {
  let component: RegisterEmployeeComponent;
  let fixture: ComponentFixture<RegisterEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterEmployeeComponent],
      providers: [
        FormBuilder,
        RegisterEmployeeService
      ],
      imports: [HttpClientTestingModule, RouterTestingModule], 
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
