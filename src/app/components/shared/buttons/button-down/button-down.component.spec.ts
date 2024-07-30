import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDownComponent } from './button-down.component';

describe('ButtonDownComponent', () => {
  let component: ButtonDownComponent;
  let fixture: ComponentFixture<ButtonDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
