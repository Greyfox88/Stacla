import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollbarComponent } from './rollbar.component';

describe('RollbarComponent', () => {
  let component: RollbarComponent;
  let fixture: ComponentFixture<RollbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
