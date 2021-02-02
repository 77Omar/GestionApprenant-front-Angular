import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfilDeSortieComponent } from './add-profil-de-sortie.component';

describe('AddProfilDeSortieComponent', () => {
  let component: AddProfilDeSortieComponent;
  let fixture: ComponentFixture<AddProfilDeSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfilDeSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfilDeSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
