import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMarkFalseComponent } from './button-mark-false.component';

describe('ButtonMarkFalseComponent', () => {
  let component: ButtonMarkFalseComponent;
  let fixture: ComponentFixture<ButtonMarkFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonMarkFalseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMarkFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
