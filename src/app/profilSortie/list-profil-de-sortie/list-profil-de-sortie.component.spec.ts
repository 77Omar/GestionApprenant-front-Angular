import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfilDeSortieComponent } from './list-profil-de-sortie.component';

describe('ListProfilDeSortieComponent', () => {
  let component: ListProfilDeSortieComponent;
  let fixture: ComponentFixture<ListProfilDeSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProfilDeSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProfilDeSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
