import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroupeCompetenceComponent } from './add-groupe-competence.component';

describe('AddGroupeCompetenceComponent', () => {
  let component: AddGroupeCompetenceComponent;
  let fixture: ComponentFixture<AddGroupeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGroupeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroupeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
