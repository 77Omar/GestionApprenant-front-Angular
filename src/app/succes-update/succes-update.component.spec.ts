import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesUpdateComponent } from './succes-update.component';

describe('SuccesUpdateComponent', () => {
  let component: SuccesUpdateComponent;
  let fixture: ComponentFixture<SuccesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
