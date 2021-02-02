import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerCompetencesComponent } from './lister-competences.component';

describe('ListerCompetencesComponent', () => {
  let component: ListerCompetencesComponent;
  let fixture: ComponentFixture<ListerCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
