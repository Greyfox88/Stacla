import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCharactersComponent } from './tab-characters.component';

describe('TabCharactersComponent', () => {
  let component: TabCharactersComponent;
  let fixture: ComponentFixture<TabCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabCharactersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
