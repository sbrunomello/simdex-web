import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedListsComponent } from './featured-lists.component';

describe('FeaturedListsComponent', () => {
  let component: FeaturedListsComponent;
  let fixture: ComponentFixture<FeaturedListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedListsComponent]
    });
    fixture = TestBed.createComponent(FeaturedListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
