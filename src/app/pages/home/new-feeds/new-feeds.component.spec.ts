import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeedsComponent } from './new-feeds.component';

describe('NewFeedsComponent', () => {
  let component: NewFeedsComponent;
  let fixture: ComponentFixture<NewFeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFeedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
