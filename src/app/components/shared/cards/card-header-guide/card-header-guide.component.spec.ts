import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHeaderGuideComponent } from './card-header-guide.component';

describe('OceCardHeaderGuideComponent', () => {
  let component: CardHeaderGuideComponent;
  let fixture: ComponentFixture<CardHeaderGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHeaderGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHeaderGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
