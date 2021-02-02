import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupecompetenceComponent } from './edit-groupecompetence.component';

describe('EditGroupecompetenceComponent', () => {
  let component: EditGroupecompetenceComponent;
  let fixture: ComponentFixture<EditGroupecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGroupecompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
