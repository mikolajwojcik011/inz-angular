import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexTrueOrFalseComponent } from './complex-true-or-false.component';

describe('ComplexTrueOrFalseComponent', () => {
  let component: ComplexTrueOrFalseComponent;
  let fixture: ComponentFixture<ComplexTrueOrFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexTrueOrFalseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexTrueOrFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
