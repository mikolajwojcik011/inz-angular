import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConspectElementComponent } from './conspect-element.component';

describe('ConspectElementComponent', () => {
  let component: ConspectElementComponent;
  let fixture: ComponentFixture<ConspectElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConspectElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConspectElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
