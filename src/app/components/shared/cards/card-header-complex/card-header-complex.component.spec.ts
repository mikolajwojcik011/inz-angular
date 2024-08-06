import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderComplexComponent } from './card-header-complex.component';

describe('OceCardHeaderComplexComponent', () => {
  let component: CardHeaderComplexComponent;
  let fixture: ComponentFixture<CardHeaderComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHeaderComplexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHeaderComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
