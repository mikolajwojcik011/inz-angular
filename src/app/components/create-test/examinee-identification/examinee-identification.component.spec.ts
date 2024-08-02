import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamineeIdentificationComponent } from './examinee-identification.component';

describe('ExamineeIdentificationComponent', () => {
  let component: ExamineeIdentificationComponent;
  let fixture: ComponentFixture<ExamineeIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamineeIdentificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamineeIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
