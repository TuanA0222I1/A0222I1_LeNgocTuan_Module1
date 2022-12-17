import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProducesComponent } from './update-produces.component';

describe('UpdateProducesComponent', () => {
  let component: UpdateProducesComponent;
  let fixture: ComponentFixture<UpdateProducesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProducesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProducesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
