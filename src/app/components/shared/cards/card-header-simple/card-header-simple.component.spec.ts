import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderSimpleComponent } from './card-header-simple.component';

describe('OceCardHeaderComponent', () => {
  let component: CardHeaderSimpleComponent;
  let fixture: ComponentFixture<CardHeaderSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHeaderSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHeaderSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
