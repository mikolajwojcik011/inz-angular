import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTemplateMatchComponent } from './question-template-match.component';

describe('QuestionTemplateMatchComponent', () => {
  let component: QuestionTemplateMatchComponent;
  let fixture: ComponentFixture<QuestionTemplateMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionTemplateMatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionTemplateMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
