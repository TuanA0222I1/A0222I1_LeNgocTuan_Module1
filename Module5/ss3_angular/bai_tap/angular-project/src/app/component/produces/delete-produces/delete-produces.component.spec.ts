import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProducesComponent } from './delete-produces.component';

describe('DeleteProducesComponent', () => {
  let component: DeleteProducesComponent;
  let fixture: ComponentFixture<DeleteProducesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProducesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProducesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
