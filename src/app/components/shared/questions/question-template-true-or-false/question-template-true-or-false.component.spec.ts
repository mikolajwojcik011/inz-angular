import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTemplateTrueOrFalseComponent } from './question-template-true-or-false.component';

describe('QuestionTemplateTrueOrFalseComponent', () => {
  let component: QuestionTemplateTrueOrFalseComponent;
  let fixture: ComponentFixture<QuestionTemplateTrueOrFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionTemplateTrueOrFalseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionTemplateTrueOrFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
