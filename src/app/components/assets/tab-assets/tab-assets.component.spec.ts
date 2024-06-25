import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAssetsComponent } from './tab-assets.component';

describe('TabShipsComponent', () => {
  let component: TabAssetsComponent;
  let fixture: ComponentFixture<TabAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabAssetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
