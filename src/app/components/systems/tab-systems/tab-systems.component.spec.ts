import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSystemsComponent } from './tab-systems.component';

describe('TabSystemsComponent', () => {
  let component: TabSystemsComponent;
  let fixture: ComponentFixture<TabSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabSystemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
