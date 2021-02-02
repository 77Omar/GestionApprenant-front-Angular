import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPromoComponent } from './item-promo.component';

describe('ItemPromoComponent', () => {
  let component: ItemPromoComponent;
  let fixture: ComponentFixture<ItemPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
