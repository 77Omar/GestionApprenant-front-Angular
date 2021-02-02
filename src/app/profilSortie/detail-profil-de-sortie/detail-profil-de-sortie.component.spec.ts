import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProfilDeSortieComponent } from './detail-profil-de-sortie.component';

describe('DetailProfilDeSortieComponent', () => {
  let component: DetailProfilDeSortieComponent;
  let fixture: ComponentFixture<DetailProfilDeSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProfilDeSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProfilDeSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
