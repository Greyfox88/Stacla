import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterlistComponent } from './characterlist.component';

describe('CharacterlistComponent', () => {
  let component: CharacterlistComponent;
  let fixture: ComponentFixture<CharacterlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
