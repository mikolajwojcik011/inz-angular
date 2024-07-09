import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTemplateTestComponent } from './question-template-test.component';

describe('QuestionTemplateTestComponent', () => {
  let component: QuestionTemplateTestComponent;
  let fixture: ComponentFixture<QuestionTemplateTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionTemplateTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionTemplateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
