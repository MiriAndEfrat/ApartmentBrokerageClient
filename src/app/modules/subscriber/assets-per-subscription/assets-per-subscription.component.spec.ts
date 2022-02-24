import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsPerSubscriptionComponent } from './assets-per-subscription.component';

describe('AssetsPerSubscriptionComponent', () => {
  let component: AssetsPerSubscriptionComponent;
  let fixture: ComponentFixture<AssetsPerSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsPerSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsPerSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
