import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceCardHeaderSimpleComponent } from './oce-card-header-simple.component';

describe('OceCardHeaderComponent', () => {
  let component: OceCardHeaderSimpleComponent;
  let fixture: ComponentFixture<OceCardHeaderSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceCardHeaderSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceCardHeaderSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
