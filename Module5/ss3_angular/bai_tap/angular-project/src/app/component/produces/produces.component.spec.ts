import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducesComponent } from './produces.component';

describe('ProducesComponent', () => {
  let component: ProducesComponent;
  let fixture: ComponentFixture<ProducesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
