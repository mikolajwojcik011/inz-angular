import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrueOrFalseTemplateComponent } from './create-true-or-false-template.component';

describe('CreateTrueOrFalseTemplateComponent', () => {
  let component: CreateTrueOrFalseTemplateComponent;
  let fixture: ComponentFixture<CreateTrueOrFalseTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTrueOrFalseTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrueOrFalseTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
