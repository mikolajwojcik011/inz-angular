import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConspectComponent } from './conspect.component';

describe('SideBarComponent', () => {
  let component: ConspectComponent;
  let fixture: ComponentFixture<ConspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConspectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
