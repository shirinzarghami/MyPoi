import { TestBed } from '@angular/core/testing';

import { RegisterEmployeeService } from './register-employee.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterEmployeeService', () => {
  let service: RegisterEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RegisterEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
