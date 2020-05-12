import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatProductsNameComponent } from './cat-products-name.component';

describe('CatProductsNameComponent', () => {
  let component: CatProductsNameComponent;
  let fixture: ComponentFixture<CatProductsNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatProductsNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatProductsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
