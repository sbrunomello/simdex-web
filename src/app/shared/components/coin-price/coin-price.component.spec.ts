import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoinPriceComponent } from './coin-price.component';


describe('CoinPriceComponent', () => {
  let component: CoinPriceComponent;
  let fixture: ComponentFixture<CoinPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinPriceComponent]
    });
    fixture = TestBed.createComponent(CoinPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
