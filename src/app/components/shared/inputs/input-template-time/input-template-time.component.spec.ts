import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTemplateTimeComponent } from './input-template-time.component';

describe('InputTemplateTimeComponent', () => {
  let component: InputTemplateTimeComponent;
  let fixture: ComponentFixture<InputTemplateTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTemplateTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTemplateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
