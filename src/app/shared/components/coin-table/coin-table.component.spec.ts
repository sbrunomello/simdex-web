import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinTableComponent } from './coin-table.component';

describe('CryptoTableComponent', () => {
  let component: CoinTableComponent;
  let fixture: ComponentFixture<CoinTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinTableComponent]
    });
    fixture = TestBed.createComponent(CoinTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
