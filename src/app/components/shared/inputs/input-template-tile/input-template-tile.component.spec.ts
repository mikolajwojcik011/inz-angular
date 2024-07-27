import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTemplateTileComponent } from './input-template-tile.component';

describe('InputTemplateTileComponent', () => {
  let component: InputTemplateTileComponent;
  let fixture: ComponentFixture<InputTemplateTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTemplateTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTemplateTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
