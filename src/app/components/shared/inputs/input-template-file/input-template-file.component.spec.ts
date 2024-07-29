import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTemplateFileComponent } from './input-template-file.component';

describe('InputTemplateFileComponent', () => {
  let component: InputTemplateFileComponent;
  let fixture: ComponentFixture<InputTemplateFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTemplateFileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTemplateFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
