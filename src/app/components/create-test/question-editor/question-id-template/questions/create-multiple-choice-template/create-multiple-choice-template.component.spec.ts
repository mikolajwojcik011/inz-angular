import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMultipleChoiceTemplateComponent } from './create-multiple-choice-template.component';

describe('CreateMultipleChoiceTemplateComponent', () => {
  let component: CreateMultipleChoiceTemplateComponent;
  let fixture: ComponentFixture<CreateMultipleChoiceTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMultipleChoiceTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMultipleChoiceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
