import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGroupeCompetenceComponent } from './detail-groupe-competence.component';

describe('DetailGroupeCompetenceComponent', () => {
  let component: DetailGroupeCompetenceComponent;
  let fixture: ComponentFixture<DetailGroupeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailGroupeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGroupeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
