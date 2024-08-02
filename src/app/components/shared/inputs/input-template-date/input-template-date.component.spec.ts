import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTemplateDateComponent } from './input-template-date.component';

describe('InputTemplateDateComponent', () => {
  let component: InputTemplateDateComponent;
  let fixture: ComponentFixture<InputTemplateDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTemplateDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTemplateDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
