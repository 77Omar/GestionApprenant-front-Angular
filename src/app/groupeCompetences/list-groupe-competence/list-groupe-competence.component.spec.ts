import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupeCompetenceComponent } from './list-groupe-competence.component';

describe('ListGroupeCompetenceComponent', () => {
  let component: ListGroupeCompetenceComponent;
  let fixture: ComponentFixture<ListGroupeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGroupeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
