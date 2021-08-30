import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterEmployeeService } from '../register-employee.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowEmployesComponent } from './show-employes.component';

describe('ShowEmployesComponent', () => {
  let component: ShowEmployesComponent;
  let fixture: ComponentFixture<ShowEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowEmployesComponent],
      imports: [HttpClientTestingModule, RouterTestingModule], 
      providers: [RegisterEmployeeService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
