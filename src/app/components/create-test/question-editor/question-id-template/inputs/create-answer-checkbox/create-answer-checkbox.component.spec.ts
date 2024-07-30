import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnswerCheckboxComponent } from './create-answer-checkbox.component';

describe('CreateAnswerCheckboxComponent', () => {
  let component: CreateAnswerCheckboxComponent;
  let fixture: ComponentFixture<CreateAnswerCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAnswerCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAnswerCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
