import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListProfilSortieComponent } from './edit-list-profil-sortie.component';

describe('EditListProfilSortieComponent', () => {
  let component: EditListProfilSortieComponent;
  let fixture: ComponentFixture<EditListProfilSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditListProfilSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListProfilSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
