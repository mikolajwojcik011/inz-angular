import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContentComponent } from './card-content.component';

describe('OceCardContentComponent', () => {
  let component: CardContentComponent;
  let fixture: ComponentFixture<CardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
