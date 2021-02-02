import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGroupeCompetenceComponent } from './item-groupe-competence.component';

describe('ItemGroupeCompetenceComponent', () => {
  let component: ItemGroupeCompetenceComponent;
  let fixture: ComponentFixture<ItemGroupeCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemGroupeCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGroupeCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
