import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipComponent } from './ship.component';

describe('ShipComponent', () => {
  let component: ShipComponent;
  let fixture: ComponentFixture<ShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
