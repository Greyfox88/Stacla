import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTabsComponent } from './body-tabs.component';

describe('BodyTabsComponent', () => {
  let component: BodyTabsComponent;
  let fixture: ComponentFixture<BodyTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
