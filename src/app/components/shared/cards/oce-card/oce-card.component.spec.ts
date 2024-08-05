import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceCardComponent } from './oce-card.component';

describe('OceCardComponent', () => {
  let component: OceCardComponent;
  let fixture: ComponentFixture<OceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
