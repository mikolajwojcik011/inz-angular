import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddQuestionComponent } from './button-add-question.component';

describe('ButtonAddQuestionComponent', () => {
  let component: ButtonAddQuestionComponent;
  let fixture: ComponentFixture<ButtonAddQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonAddQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAddQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
