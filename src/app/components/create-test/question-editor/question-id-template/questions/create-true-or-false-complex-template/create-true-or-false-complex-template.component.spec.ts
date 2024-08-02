import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrueOrFalseComplexTemplateComponent } from './create-true-or-false-complex-template.component';

describe('CreateTrueOrFalseComplexTemplateComponent', () => {
  let component: CreateTrueOrFalseComplexTemplateComponent;
  let fixture: ComponentFixture<CreateTrueOrFalseComplexTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTrueOrFalseComplexTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrueOrFalseComplexTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
