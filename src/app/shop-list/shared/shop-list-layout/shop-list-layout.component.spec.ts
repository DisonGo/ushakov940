import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopListLayoutComponent } from './shop-list-layout.component';

describe('ShopListLayoutComponent', () => {
  let component: ShopListLayoutComponent;
  let fixture: ComponentFixture<ShopListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopListLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
