import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementsViewComponent } from './evenements-view.component';

describe('EvenementsViewComponent', () => {
  let component: EvenementsViewComponent;
  let fixture: ComponentFixture<EvenementsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
