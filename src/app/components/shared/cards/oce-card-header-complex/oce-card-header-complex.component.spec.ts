import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceCardHeaderComplexComponent } from './oce-card-header-complex.component';

describe('OceCardHeaderComplexComponent', () => {
  let component: OceCardHeaderComplexComponent;
  let fixture: ComponentFixture<OceCardHeaderComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceCardHeaderComplexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceCardHeaderComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
