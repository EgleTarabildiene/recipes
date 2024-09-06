import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMealsComponent } from './new-meals.component';

describe('NewMealsComponent', () => {
  let component: NewMealsComponent;
  let fixture: ComponentFixture<NewMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
