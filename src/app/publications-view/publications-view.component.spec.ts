import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsViewComponent } from './publications-view.component';

describe('PublicationsViewComponent', () => {
  let component: PublicationsViewComponent;
  let fixture: ComponentFixture<PublicationsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
