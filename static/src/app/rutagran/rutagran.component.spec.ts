import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutagranComponent } from './rutagran.component';

describe('RutagranComponent', () => {
  let component: RutagranComponent;
  let fixture: ComponentFixture<RutagranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutagranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutagranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
