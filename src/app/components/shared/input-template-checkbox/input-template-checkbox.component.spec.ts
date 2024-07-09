import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTemplateCheckboxComponent } from './input-template-checkbox.component';

describe('InputCheckboxComponent', () => {
  let component: InputTemplateCheckboxComponent;
  let fixture: ComponentFixture<InputTemplateCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTemplateCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTemplateCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
