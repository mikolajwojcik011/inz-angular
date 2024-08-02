import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFillGapsListTemplateComponent } from './create-fill-gaps-list-template.component';

describe('CreateFillGapsListTemplateComponent', () => {
  let component: CreateFillGapsListTemplateComponent;
  let fixture: ComponentFixture<CreateFillGapsListTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFillGapsListTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFillGapsListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
