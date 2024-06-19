import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabShipsComponent } from './tab-ships.component';

describe('TabShipsComponent', () => {
  let component: TabShipsComponent;
  let fixture: ComponentFixture<TabShipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabShipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
