import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmployesComponent } from './show-employes.component';

describe('ShowEmployesComponent', () => {
  let component: ShowEmployesComponent;
  let fixture: ComponentFixture<ShowEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmployesComponent ]
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
