import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreViewComponent } from './membre-view.component';

describe('MembreViewComponent', () => {
  let component: MembreViewComponent;
  let fixture: ComponentFixture<MembreViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
