import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceCardContentComponent } from './oce-card-content.component';

describe('OceCardContentComponent', () => {
  let component: OceCardContentComponent;
  let fixture: ComponentFixture<OceCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceCardContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
