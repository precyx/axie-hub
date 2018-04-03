import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxieAuctionObserverComponent } from './axie-auction-observer.component';

describe('AxieAuctionObserverComponent', () => {
  let component: AxieAuctionObserverComponent;
  let fixture: ComponentFixture<AxieAuctionObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxieAuctionObserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxieAuctionObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
