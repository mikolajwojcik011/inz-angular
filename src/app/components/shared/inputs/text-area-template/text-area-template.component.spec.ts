import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaTemplateComponent } from './text-area-template.component';

describe('TextAreaTemplateComponent', () => {
  let component: TextAreaTemplateComponent;
  let fixture: ComponentFixture<TextAreaTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAreaTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAreaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
