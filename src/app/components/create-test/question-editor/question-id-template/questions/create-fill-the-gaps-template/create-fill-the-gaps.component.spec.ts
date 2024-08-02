import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFillTheGapsComponent } from './create-fill-the-gaps.component';

describe('CreateFillTheGapsComponent', () => {
  let component: CreateFillTheGapsComponent;
  let fixture: ComponentFixture<CreateFillTheGapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFillTheGapsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFillTheGapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
