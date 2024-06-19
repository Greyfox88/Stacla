import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCampaignComponent } from './tab-campaign.component';

describe('TabCampaignComponent', () => {
  let component: TabCampaignComponent;
  let fixture: ComponentFixture<TabCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabCampaignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
