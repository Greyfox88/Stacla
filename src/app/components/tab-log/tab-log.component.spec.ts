import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabJournalComponent } from './tab-log.component';

describe('TabJournalComponent', () => {
  let component: TabJournalComponent;
  let fixture: ComponentFixture<TabJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabJournalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
