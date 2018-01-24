import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GigsPageComponent } from './gigs-page.component';

describe('GigsPageComponent', () => {
  let component: GigsPageComponent;
  let fixture: ComponentFixture<GigsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GigsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
