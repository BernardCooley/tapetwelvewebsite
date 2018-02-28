import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDividerComponent } from './page-divider.component';

describe('PageDividerComponent', () => {
  let component: PageDividerComponent;
  let fixture: ComponentFixture<PageDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
