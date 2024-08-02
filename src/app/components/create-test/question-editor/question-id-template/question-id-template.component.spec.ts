import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionIdTemplateComponent } from './question-id-template.component';

describe('QuestionIdTemplateComponent', () => {
  let component: QuestionIdTemplateComponent;
  let fixture: ComponentFixture<QuestionIdTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionIdTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionIdTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
