import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTemplateTextComponent } from './input-template-text.component';

describe('InputTemplateTextComponent', () => {
  let component: InputTemplateTextComponent;
  let fixture: ComponentFixture<InputTemplateTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTemplateTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTemplateTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
