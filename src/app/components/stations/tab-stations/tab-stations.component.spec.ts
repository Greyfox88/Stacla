import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStationsComponent } from './tab-stations.component';

describe('TabStationsComponent', () => {
  let component: TabStationsComponent;
  let fixture: ComponentFixture<TabStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabStationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
