import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMarkTrueComponent } from './button-mark-true.component';

describe('ButtonMarkTrueComponent', () => {
  let component: ButtonMarkTrueComponent;
  let fixture: ComponentFixture<ButtonMarkTrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonMarkTrueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMarkTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
