import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsItemComponent } from './product-details-item.component';

describe('ProductDetailsItemComponent', () => {
  let component: ProductDetailsItemComponent;
  let fixture: ComponentFixture<ProductDetailsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
