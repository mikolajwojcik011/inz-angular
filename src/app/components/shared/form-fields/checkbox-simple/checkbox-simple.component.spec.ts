import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxSimpleComponent } from './checkbox-simple.component';

describe('CheckboxSimpleComponent', () => {
  let component: CheckboxSimpleComponent;
  let fixture: ComponentFixture<CheckboxSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
