import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceCardHeaderGuideComponent } from './oce-card-header-guide.component';

describe('OceCardHeaderGuideComponent', () => {
  let component: OceCardHeaderGuideComponent;
  let fixture: ComponentFixture<OceCardHeaderGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceCardHeaderGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceCardHeaderGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
