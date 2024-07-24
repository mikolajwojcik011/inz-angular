import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchComponent } from './match.component';

describe('QuestionTemplateMatchComponent', () => {
  let component: MatchComponent;
  let fixture: ComponentFixture<MatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
