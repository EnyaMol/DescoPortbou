import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntsgranComponent } from './puntsgran.component';

describe('PuntsgranComponent', () => {
  let component: PuntsgranComponent;
  let fixture: ComponentFixture<PuntsgranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntsgranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntsgranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
