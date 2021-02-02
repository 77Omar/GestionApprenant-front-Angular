import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCompetencesComponent } from './detail-competences.component';

describe('DetailCompetencesComponent', () => {
  let component: DetailCompetencesComponent;
  let fixture: ComponentFixture<DetailCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
