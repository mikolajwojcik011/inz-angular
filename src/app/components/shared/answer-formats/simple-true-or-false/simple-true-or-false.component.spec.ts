import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTrueOrFalseComponent } from './simple-true-or-false.component';

describe('QuestionTemplateTrueOrFalseComponent', () => {
  let component: SimpleTrueOrFalseComponent;
  let fixture: ComponentFixture<SimpleTrueOrFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleTrueOrFalseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTrueOrFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
