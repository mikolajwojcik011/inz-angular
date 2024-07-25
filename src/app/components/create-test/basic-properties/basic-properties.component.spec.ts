import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPropertiesComponent } from './basic-properties.component';

describe('BasicPropertiesComponent', () => {
  let component: BasicPropertiesComponent;
  let fixture: ComponentFixture<BasicPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicPropertiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
